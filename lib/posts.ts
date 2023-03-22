import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { map } from "../pages/map";

const postsDirectory = path.join(process.cwd(), "pages/posts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const postName = fileName.replace(/\.tsx$/, "");

    const fullPath = path.join(postsDirectory, fileName);

    const meta = map.get(postName);

    return {
      name: postName,
      ...meta,
    };
  });
  return allPostsData;
}
