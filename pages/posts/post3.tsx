import Link from "next/link";

export default function Post1() {
  return (
    <>
      <h1>Some post</h1>
      <Link href={"/posts/post1"}>Link to first post</Link>
      <Link href={"/posts/post2"}>Link to second post</Link>
      <div>my third post</div>
    </>
  );
}
