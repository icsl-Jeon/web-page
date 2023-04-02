import Link from "next/link";
import Image from "next/image";
import { map } from "../../map";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import CodeBlock from "../../components/CodeBlock";
import { PageCategory } from "../../lib/types";
import Head from "next/head";

const postKey = "post3";
const tags = map.get(postKey)?.tag;
const title = map.get(postKey)?.title;
const date = map.get(postKey)?.date;

export default function Post3() {
  return (
    <>
      <Head>
        {" "}
        <title>{title} </title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={title} />
        <meta property="og:image" content="/images/post3/thumbnail.jpg" />
      </Head>
      <div className="relative">
        <div className="fixed w-full z-50">
          <Header category={PageCategory.Blog} />
        </div>
        <br></br>
        <br></br>
        <br className="hidden sm:inline"></br>

        <section className="transition-all duration-200 ease-in opacity">
          <h1 className="title">{title}</h1>
          <div className="flex justify-between items-center">
            <div className="flex">
              {tags?.map((tag) => (
                <div className="tag" key={tag}>
                  <Link href={`/tags/${tag}`}>#{tag}</Link>
                </div>
              ))}
            </div>
            <p className="date">{date}</p>
          </div>
          <Image
            priority
            className="mx-auto my-4 rounded-2xl"
            width={800}
            height={500}
            src="/images/post3/thumbnail.jpg"
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
          <Heading level={2} children="Motivation of this" />
          <p>
            Vitae justo eget magna fermentum. Pellentesque adipiscing commodo
            elit at imperdiet dui. Quis risus sed vulputate odio ut enim blandit
            volutpat maecenas. Donec massa sapien faucibus et molestie ac
            feugiat. Vel pharetra vel turpis nunc eget lorem dolor sed viverra.
            Diam ut venenatis tellus in metus vulputate eu scelerisque. Amet
            volutpat consequat mauris nunc congue nisi. Lorem ipsum dolor sit
            amet. Id semper risus in hendrerit.
          </p>
          <h2>Approach</h2>
          <p>
            <Link href={"/posts/post1"} className="underline">
              Referring the first post,
            </Link>
            <Link href={"/posts/post2"} className="underline">
              this way.
            </Link>{" "}
            <Link
              href={"/posts/post3#motivation-of-this"}
              className="underline"
            >
              this way.
            </Link>{" "}
            But consider the belows:
          </p>

          <ul className="list-disc list-inside m-3">
            <li>First point</li>
            <li>Second point</li>
            <li>Third point</li>
          </ul>
          <ol className="list-decimal list-inside m-3">
            <li>First point</li>
            <li>Second point</li>
            <li>Third point</li>
          </ol>
          <CodeBlock
            title="SomeExample.cpp"
            codeString={`template<typename T,size_t dim>
struct LoosePin : public Pin<T,dim> {
    Vector<T,dim> xl; // lower bound
    Vector<T,dim> xu; // upper bound
    LoosePin(T t_, uint d_, Vector<T,dim> xl_, Vector<T,dim> xu_) : Pin<T,dim>(t_, d_), xl(xl_), xu(xu_) {};
    PIN_TYPE getType() const { return PIN_TYPE::LOOSE_PIN; }
};`}
          ></CodeBlock>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
            mattis vulputate enim nulla aliquet porttitor lacus luctus. Facilisi
            morbi tempus iaculis urna id volutpat lacus laoreet non. Euismod
            lacinia at quis risus sed.{" "}
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
            mattis vulputate enim nulla aliquet porttitor lacus luctus. Facilisi
            morbi tempus iaculis urna id volutpat lacus laoreet non. Euismod
            lacinia at quis risus sed.{" "}
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
            mattis vulputate enim nulla aliquet porttitor lacus luctus. Facilisi
            morbi tempus iaculis urna id volutpat lacus laoreet non. Euismod
            lacinia at quis risus sed.{" "}
          </p>
        </section>
      </div>
    </>
  );
}
