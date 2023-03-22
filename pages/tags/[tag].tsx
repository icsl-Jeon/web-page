import { GetStaticProps, GetStaticPaths } from "next";
import { getSortedPostsData } from "../../lib/posts";
import { map } from "../map";
import { Tag } from "../map";

const TagPage = ({ posts }: { posts: { title: string }[] }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.title}>{post.title}</div>
      ))}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = Object.values(Tag);
  console.log("filtered", tags);

  const paths = tags.map((tag) => ({
    params: { tag: tag },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = getSortedPostsData();
  const filteredPosts = posts.filter((post) =>
    post.tag.includes(params?.tag as string)
  );

  return { props: { posts: filteredPosts } };
};

export default TagPage;
