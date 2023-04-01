import Head from "next/head";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps } from "next";
import { map } from "../map";
import Header from "../components/Header";
import { Transition } from "@headlessui/react";

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
  const [loading, setIsLoading] = useState(true);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      console.log("resize");
      setWidth(window.innerWidth);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  useEffect(() => {
    setIsLoading(false);

    async function loadForceGraph() {
      const myString: string = "Dr. Boseong Jeon 🦊";
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
          width={width}
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
            fgRef.current.zoomToFit(1000, 50);
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
  }, [hoveredNode, width]);
  return (
    <>
      <Head>
        {" "}
        <title>Boseong Jeon </title>
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="">
        <div className="fixed z-50 w-full ">
          <Header />
        </div>
        <div className="fixed mx-auto w-full  sm:mx-0 sm:max-w-md z-20 inset-x-0 bottom-0 flex flex-col items-center sm:-translate-x-5">
          <Transition
            show={!loading}
            enter="transition-all ease-in-out duration-1000 delay-[1500ms]"
            enterFrom="opacity-0 translate-y-3"
            enterTo="opacity-100 translate-y-0"
            leave="transition-all ease-in-out duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="  flex items-center  text-2xl sm:text-xl p-4  bg-orange-100 m-2 rounded-lg ">
              {" "}
              Drag to move texts and click to visit
              <button
                onClick={() => {
                  setIsLoading(true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6 ml-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </Transition>
        </div>
        {forceGraph}
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
