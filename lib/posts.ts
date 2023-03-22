import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "pages/posts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const postName = fileName.replace(/\.tsx$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    console.log(fullPath);

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const match = fileContents.match(/export const meta = ({[\s\S]+?});/);
    const matchedString = match[1];
    console.log(matchedString);

    const meta = {};

    return {
      name: postName,
      ...meta,
    };
  });
  return allPostsData;
}
