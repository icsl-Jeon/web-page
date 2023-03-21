import { GetStaticProps, GetStaticPaths } from "next";
import { getSortedPostsData } from "../../../lib/posts";

const TagPage = ({ posts }: { posts: { id: number; title: string }[] }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getSortedPostsData();
  const tags = posts.reduce((acc: string[], post) => {
    return [...acc, ...post.tags];
  }, []);
  let uniqueTags: string[] = [];

  tags.forEach((tag) => {
    if (!uniqueTags.includes(tag)) {
      uniqueTags.push(tag);
    }
  });
  const paths = uniqueTags.map((tag) => ({
    params: { tag: tag },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = getSortedPostsData();
  const filteredPosts = posts.filter((post) =>
    post.tags.includes(params?.tag as string)
  );
  return { props: { posts: filteredPosts } };
};

export default TagPage;
