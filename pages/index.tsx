import Head from "next/head";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import { GetStaticProps } from "next";
import { map } from "../map";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    name: string;
    title: string;
    tag: string[];
    referring: string[];
  }[];
  randomTree: any;
}) {
  const fgRef = useRef<any>();

  const [forceGraph, setForceGraph] = useState<null | JSX.Element>(null);
  const [hoveredNode, setHoverNode] = useState<any>(null);

  useEffect(() => {
    async function loadForceGraph() {
      const myString = "Dr. Boseong Jeon🦊";
      let nodes: Array<{ id: string; group: number; isFocus: boolean }> = [
        { id: myString, group: 2, isFocus: false },
      ];
      let links: Array<{ source: string; target: string }> = [];
      let tagSet = new Set();

      allPostsData.forEach((post) => {
        const postTitle = post.title;
        nodes.push({ id: postTitle, group: 0, isFocus: false });

        post.referring.forEach((refer) => {
          const referObject = map.get(refer);
          if (referObject === undefined) return;

          links.push({ source: postTitle, target: referObject.title });
          links.push({ source: myString, target: postTitle });
        });
        post.tag.forEach((tag) => {
          if (!tagSet.has(tag)) {
            nodes.push({ id: tag, group: 1, isFocus: false });
            tagSet.add(tag);
          }
          links.push({ source: postTitle, target: tag });
        });
      });

      // Only load the component on the client-side, to avoid issues with `window`
      const { ForceGraph2D } = await import("react-force-graph");

      setForceGraph(
        <ForceGraph2D
          ref={fgRef}
          graphData={{ nodes: nodes, links: links }}
          linkDirectionalArrowLength={(link) => {
            if (link.target === undefined) return 0;
            if (typeof link.target === "string") return 0;
            if (typeof link.target === "number") return 0;
            if (!("group" in link.target)) return 0;

            if (link.target.group == 0) return 1.2;
            else return 0;
          }}
          backgroundColor="none"
          linkColor="gray"
          linkWidth={(link) => {
            if (link.target === undefined) return 0;
            if (typeof link.target === "string") return 0;
            if (typeof link.target === "number") return 0;
            if (!("group" in link.target)) return 0;
            if (link.target.group == 0) return 0.8;
            else return 1.5;
          }}
          nodeCanvasObject={(node, ctx, globalScale) => {
            let label = node.id;
            let fontSize = 2;

            if ("group" in node) {
              if (node.group == 2) fontSize *= 1.2;
              if (node.group == 1) fontSize /= 1.1;

              if (node.group == 0) ctx.font = `bold ${fontSize}px Sans-Serif`;
              if (node.group == 1) ctx.font = ` ${fontSize}px Sans-Serif`;
              if (node.group == 2) ctx.font = `${fontSize}px Sans-Serif`;

              if (node.group == 1 && typeof label === "string")
                label = "#".concat(label);
            }

            if (
              label === undefined ||
              node.x === undefined ||
              node.y === undefined
            )
              return;

            const textWidth = ctx.measureText(label?.toString()).width;
            const bckgDimensions = [textWidth, fontSize].map(
              (n) => n + fontSize * 0.8
            ); // some padding

            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            ctx.fillText(label.toString(), node.x, node.y);
            if ("__bckgDimensions" in node)
              node.__bckgDimensions = bckgDimensions; // to re-use in nodePointerAreaPaint
          }}
          onEngineStop={() => {
            if (fgRef.current === undefined) return;
            fgRef.current.zoomToFit(1000, 20);
          }}
          cooldownTicks={3}
          onNodeClick={(node, event) => {
            if (!("group" in node)) return;

            if (node.group === 0) {
              const title = node.id;
              let postId: string = "";
              map.forEach((value, key) => {
                if (value.title === title) postId = key;
              });
              window.location.href = `posts/${postId}`;
            } else if (node.group === 1) {
              const tagId = node.id;

              window.location.href = `tags/${tagId}`;
            }
            // TODO group ===2 bio page
          }}
        />
      );
    }
    loadForceGraph();
  }, [hoveredNode]);
  return (
    <>
      <Head>
        {" "}
        <title>Boseong Jeon </title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="relative">
        <div
          className="p-2 w-full animate-bounce absolute z-10  text-md sm:text-2xl transition-opacity
       duration-1000 delay-200 opacity-100 flex items-center justify-center sm:justify-start "
        >
          <p className="py-6 px-5 text-left  text-gray-600 font-sans">
            Try clicking or dragging texts 🤖{" "}
          </p>
        </div>
        <div className="bg-gradient-to-tr from-white via-gray-100    to-slate-100">
          {forceGraph}
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
