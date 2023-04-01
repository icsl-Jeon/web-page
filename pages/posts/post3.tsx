import Link from "next/link";
import Image from "next/image";
import { map } from "../../map";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import Header from "../../components/Header";
import { PageCategory } from "../../lib/types";
import Head from "next/head";
import Prism from "prismjs";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prism-material-themes/themes/material-ocean.css";
import Swal from "sweetalert2";
import "prismjs/plugins/line-highlight/prism-line-highlight";
import "prismjs/plugins/line-highlight/prism-line-highlight.css";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

const postKey = "post3";
const tags = map.get(postKey)?.tag;
const title = map.get(postKey)?.title;
const date = map.get(postKey)?.date;

function CodeBlock({
  codeString,
  title,
}: {
  codeString: string;
  title: string;
}) {
  const [code, setCode] = useState<string>(codeString);
  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);
  return (
    <div>
      {" "}
      <div className="flex flex-col">
        <div className="flex justify-between items-center px-3 bg-slate-200 shadow-md translate-y-3 z-10 p-1 rounded-t-lg text-gray-500">
          {" "}
          <pre>{title} </pre>
          <button
            className="hover:bg-slate-300 p-1 rounded-md"
            onClick={() => {
              navigator.clipboard.writeText(code);
              Swal.fire({
                title: "",
                text: "Copied to clipboard !",
                position: "bottom-start",
                timer: 1500,
                width: "20%",
                showConfirmButton: false,
                backdrop: false,
              })
                .then((result) => {})
                .catch(() => {});
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
              />
            </svg>
          </button>
        </div>
        <pre className="language-cpp line-numbers" data-line="3-5">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

export default function Post3() {
  const [loading, setIsLoading] = useState(true);

  const codeString = `const Square = (n) => return n * n`;

  useEffect(() => {
    setIsLoading(false);
  });

  return (
    <div className="relative">
      <Head>
        {" "}
        <title>Boseong Jeon </title>
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header category={PageCategory.Blog} />
      <Transition
        show={!loading}
        enter="transition-all ease-in-out duration-1000 delay-[200ms]"
        enterFrom="opacity-0 translate-y-6"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all ease-in-out duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <br></br>
        <section className="transition-all duration-200 ease-in opacity">
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
          <h2>Motivation</h2>
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
            <a href={"/posts/post1"} className="underline">
              Referring the first post,
            </a>
            <a href={"/posts/post2"} className="underline">
              this way.
            </a>{" "}
            But consider the belows:
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
          </p>
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
        </section>
      </Transition>
    </div>
  );
}
