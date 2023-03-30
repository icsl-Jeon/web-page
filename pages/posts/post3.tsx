import Link from "next/link";
import Image from "next/image";
import Opening from "../../components/Opening";
import { map } from "../../map";

const postKey = "post3";
const tags = map.get(postKey)?.tag;
const title = map.get(postKey)?.title;
const date = map.get(postKey)?.date;

export default function Post3() {
  return (
    <>
      <section>
        <h1 className="title">{title}</h1>
        <div className="flex justify-between items-center">
          <div className="flex">
            {tags?.map((tag) => (
              <div className="tag">
                <Link href={`/tags/${tag}`}>#{tag}</Link>
              </div>
            ))}
          </div>

          <p className="date">{date}</p>
        </div>
        <Image
          className="mx-auto my-4 rounded-2xl"
          width={800}
          height={500}
          src="https://c.pxhere.com/photos/17/77/art_painting_work_of_art_artistic_creative-1361627.jpg!d"
          alt="creative, artistic, painting, art, illustration, work of art, modern art, comic book, psychedelic art, Free Images In PxHere"
        />
      </section>

      <section>
        <p className="opening">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
          mattis vulputate enim nulla aliquet porttitor lacus luctus. Facilisi
          morbi tempus iaculis urna id volutpat lacus laoreet non. Euismod
          lacinia at quis risus sed.{" "}
        </p>
        <h1>1. Lorem ipsum</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
          mattis vulputate enim nulla aliquet porttitor lacus luctus. Facilisi
          morbi tempus iaculis urna id volutpat lacus laoreet non. Euismod
          lacinia at quis risus sed.{" "}
        </p>

        <h2>Motivation</h2>
        <p>
          Vitae justo eget magna fermentum. Pellentesque adipiscing commodo elit
          at imperdiet dui. Quis risus sed vulputate odio ut enim blandit
          volutpat maecenas. Donec massa sapien faucibus et molestie ac feugiat.
          Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Diam ut
          venenatis tellus in metus vulputate eu scelerisque. Amet volutpat
          consequat mauris nunc congue nisi. Lorem ipsum dolor sit amet. Id
          semper risus in hendrerit.
        </p>
        <h2>Approach</h2>
        <p>
          <a href={"/posts/post1"} className="underline">
            Referring the first post,
          </a>
          <a href={"/posts/post2"} className="underline">
            this way.
          </a>{" "}
          But
        </p>
      </section>
    </>
  );
}
