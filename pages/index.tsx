import Head from "next/head";
import { useState, useEffect } from "react";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";
import { genRandomTree } from "../lib/posts";
export default function Home({
  allPostsData,
  randomTree,
}: {
  allPostsData: {
    name: string;
    title: string;
    tag: string[];
  }[];
  randomTree: any;
}) {
  const [forceGraph, setForceGraph] = useState<null | JSX.Element>(null);
  useEffect(() => {
    async function loadForceGraph() {
      // Only load the component on the client-side, to avoid issues with `window`
      const { ForceGraph3D } = await import("react-force-graph");
      setForceGraph(<ForceGraph3D graphData={randomTree} />);
    }
    loadForceGraph();
  }, []);
  return (
    <div>
      <div>{forceGraph}</div>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section className={utilStyles.headingMd}>
          <p>[Your Self Introduction]</p>
          <p>
            (This is a sample website - you’ll be building a site like this in{" "}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ name, title, tag }) => (
              <li className={utilStyles.listItem} key={name}>
                <Link href={`/posts/${name}`}>{title}</Link>
                <br></br>
                {tag.map((tag, index) => {
                  return <Link href={`/tags/${tag}`}>{tag}</Link>;
                })}
                <br />
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const randomTreeData = genRandomTree(30);

  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
      randomTree: randomTreeData,
    },
  };
};
