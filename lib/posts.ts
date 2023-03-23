import fs from "fs";
import path from "path";
import html from "remark-html";
import { map } from "../pages/map";

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
