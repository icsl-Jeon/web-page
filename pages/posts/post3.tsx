import Link from "next/link";
import Image from "next/image";
import { map } from "../../map";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import CodeBlock from "../../components/CodeBlock";
import { PageCategory } from "../../lib/types";
import Head from "next/head";

export default function Post3({
  title,
  date,
  tags,
  imageSource,
}: {
  title: string;
  date: string;
  tags: Array<string>;
  imageSource: string;
}) {
  return (
    <>
      <Head>
        {" "}
        <title>{title} </title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={title} />
        <meta property="og:image" content={imageSource} />
      </Head>
      <div className="">
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
                  <a href={`/tags/${tag}`}>#{tag}</a>
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
            src={imageSource}
            alt="creative, artistic, painting, art, illustration, work of art, modern art, comic book, psychedelic art, Free Images In PxHere"
          />
        </section>
        <section>
          <p className="opening">
            In 2017, when I began my graduate studies, I started using ROS1. Its
            vast{" "}
            <a className="link" href="https://index.ros.org/packages/">
              ecosystems
            </a>{" "}
            and powerful capabilities made it indispensable for researchers like
            me. With ROS1, I didn't have to spend too much time creating message
            protocols or writing client code for SDKs or{" "}
            <a
              className="link"
              href="https://www.khronos.org/opengl/wiki/OpenGL_Shading_Language"
            >
              GLSLs
            </a>{" "}
            for visualization. <br></br> By the time I became very{" "}
            <a className="link" href="https://github.com/icsl-Jeon/dual_chaser">
              comfortable
            </a>{" "}
            composing ROS1 system, I found that most of{" "}
            <a
              className="link"
              href="https://github.com/stereolabs/zed-ros2-wrapper"
            >
              my favorite SDK wrappers
            </a>{" "}
            are now starting to provide ROS2 version, and I found myself unsure
            of which version to adopt for my project. Now, I see that most of
            the newly started project around me chose ROS2 for their robotic
            middleware.
          </p>
          <p>
            In this article, we will cover some of the notable differences
            between ROS1 and ROS2, as there are numerous differences that cannot
            be covered in a single article. We will explore the limitations of
            ROS1 and how ROS2's design effectively addresses them. Moreover, I
            will share my personal experiences and provide concrete examples,
            rather than simply relying on information from official
            documentation. Please note that while the {""}
            <a href="https://design.ros2.org/" className="link">
              official ROS2 documentation{" "}
            </a>
            is a valuable resource, I aim to supplement it with my own insights
            and experiences.
          </p>
          <Heading level={1}>The Operating Assumptions of ROS1: Labs</Heading>
          <p>
            As the{" "}
            <a
              className="link"
              href="https://design.ros2.org/articles/why_ros2.html"
            >
              official article
            </a>{" "}
            well described, when ROS1 had been developed, the assumed operating
            setup was lab-like environment where:
          </p>
          <ul>
            <li> there are only a single of a few robots,</li>
            <li>
              workstation always can connect to network and around the robots,{" "}
            </li>
            <li> some packet loss is allowable, </li>
          </ul>
          <div className="flex flex-col">
            <Image
              src="/images/post3/assumed-environment.png"
              alt="originally assumed ROS1 network structure"
              width={2000}
              height={300}
              className="my-5"
            ></Image>
            <div id="fig1" className="caption">
              Fig. example ROS1 system
            </div>
          </div>
          <p className="bg-orange-100 p-3 rounded-lg text-sm my-4">
            ⚠️ Note that I assumed that roscore would be located on the
            workstation, which is not always the case. In fact, I have often
            placed the master inside the robot itself to prevent the ROS node of
            the robot from going down due to disconnection from the master.{" "}
          </p>
          <p>
            In <a href="#fig1">this figure</a>, we have three physical entities:
            1) a robot, 2) a networking device (usually a Wi-Fi router), and 3)
            a workstation. Multiple ros nodes are running
          </p>
          <Heading level={2}>Problem 1: Too centralized</Heading>
          <Heading level={2}>Problem 2: fixed policy for communication</Heading>
          <Heading
            level={3}
            children="Critical topics used for safety"
          ></Heading>
          <Heading
            level={3}
            children="Non-essential topics for debugging"
          ></Heading>

          <Heading level={2}>Problem 3: Single procss </Heading>

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

export async function getStaticProps() {
  const postKey = "post3";
  const tags = map.get(postKey)?.tag;
  const title = map.get(postKey)?.title;
  const date = map.get(postKey)?.date;
  const imageSource = `/images/${postKey}/thumbnail.jpg`;
  return {
    props: {
      tags: tags,
      title: title,
      date: date,
      imageSource: imageSource,
    },
  };
}
