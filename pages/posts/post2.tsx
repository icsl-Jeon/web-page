import Link from "next/link";

export const meta = {
  title: "second posting with tsx",
  tags: ["tag2", "tag3"],
};
export default function Post2() {
  return (
    <>
      <h1>Some post</h1> <Link href={"/posts/post1"}>Link to first post</Link>{" "}
      <div>my second post</div>
    </>
  );
}
