import fs from "fs";
import path from "path";
import html from "remark-html";
import { map } from "../map";

const postsDirectory = path.join(process.cwd(), "pages/posts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const postName = fileName.replace(/\.tsx$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const regex = /<Link href={([^}]+)}>/g;

    const matches = fileContents.matchAll(regex);

    const result = Array.from(matches, (match) => {
      const hrefAttr = match[1];
      const matchHref = hrefAttr.match(/\/posts\/(\w+)/);
      return matchHref ? matchHref[1] : null;
    });
    const meta = map.get(postName);

    return {
      name: postName,
      ...meta,
      referring: result,
    };
  });
  return allPostsData;
}

export function genRandomTree(N = 300, reverse = false) {
  return {
    nodes: [...Array.from(Array(N).keys())].map((i) => ({ id: i })),
    links: [...Array.from(Array(N).keys())]
      .filter((id) => id)
      .map((id) => ({
        [reverse ? "target" : "source"]: id,
        [reverse ? "source" : "target"]: Math.round(Math.random() * (id - 1)),
      })),
  };
}
