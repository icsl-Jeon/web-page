import { useEffect, useState } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { SocialIcon } from "react-social-icons";
import { Card } from "../../components/PostSummary";
import Link from "next/link";
import { Tag } from "../../map";
import Header from "../../components/Header";
import { PageCategory } from "../../lib/types";
import Head from "next/head";
import Carousel from "../../components/Caroursel";

export default function Index() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  });
  return (
    <div className="relative">
      <Head>
        {" "}
        <title>Bio of Boseong Jeon </title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bio of Boseong Jeon" />
        <meta property="og:image" content="/images/bio/profile.jpg" />
      </Head>
      <div className="fixed w-full z-50">
        <Header category={PageCategory.Bio} />
      </div>
      <Transition
        show={loaded}
        enter="transition-all ease-in-out duration-1000 delay-[200ms]"
        enterFrom="opacity-0 translate-y-6"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all ease-in-out duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Image
          priority
          className="mx-auto rounded-none sm:rounded-xl "
          width={600}
          height={500}
          src="/images/bio/profile.jpg"
          alt="Profile picture of author"
        />
        <section>
          <h1 className="title">Hello, this is Boseong Jeon </h1>
          <div className="flex my-5 justify-center sm:justify-start">
            <SocialIcon
              bgColor="skyblue"
              url="https://scholar.google.com/citations?user=ssYQ2w4AAAAJ"
              className="mr-1"
              style={{ height: 30, width: 30 }}
            />
            <SocialIcon
              bgColor="black"
              url="https://github.com/icsl-Jeon/"
              className="mx-1"
              style={{ height: 30, width: 30 }}
            />
            <SocialIcon
              bgColor="red"
              url="https://www.youtube.com/channel/UCPeLtCD0ouhFdLO60V7pjlw"
              className="mx-1"
              style={{ height: 30, width: 30 }}
            />
            <SocialIcon
              url="https://medium.com/@junbs95"
              className="mx-1"
              style={{ height: 30, width: 30 }}
            />
          </div>
          <br></br>
          Thank you for visiting my website! I am a robotics engineer who loves
          building a robotic system and exploring the latest advancements in the
          field of robotics. <br></br> As a dedicated researcher and a developer
          with PhD, I have covered a wide range of areas from designing
          hardwares, object recognition, online spatial mapping, and motion
          planning & controls. <br></br>
          Through this website, I hope to share my expertise and insights with
          fellow robotics enthusiasts, students, and professionals. Here, you
          will find informative articles, tutorials, and reviews on the latest
          robotic technologies, as well as my thoughts on the future of robotics
          and its impact on society.
          <br></br>
          <br></br>
          <hr></hr>
          <h1>Profile</h1>
          <h2>Education</h2>
          <ul>
            <li className="">
              Received BS in mechanical & aerospace engineering at{" "}
              <a href="https://en.snu.ac.kr/" className="link">
                <i>Seoul National University</i>
              </a>{" "}
              {""}
              of South Korea, 2013-2017.
            </li>
            <li className="">
              Received PhD in Robotics at{" "}
              <i>Lab for Autonomous Robotics Research</i> (
              <a href="https://larr.snu.ac.kr/" className="link">
                LARR
              </a>
              ). Advisor:{" "}
              <a
                href="https://scholar.google.com/citations?user=TLQUwIMAAAAJ&hl=ko"
                className="link"
              >
                H. Jin Kim
              </a>
              , 2017-2023. ( <b>5 yrs graduation 🦊</b>)
            </li>
          </ul>
          <h2>Company</h2>
          <li>
            <a
              href="https://www.zippia.com/answers/staff-engineer-vs-senior-engineer/"
              className="link"
            >
              Staff engineer
            </a>{" "}
            at <i>Samsung Research</i>, 2023~.
          </li>
          <br></br>
          <hr></hr>
          <h1>Publications</h1>
          Here are some of my representative publications as the first author 📖
          {/* TODO */}
          <Link
            href={"https://ieeexplore.ieee.org/document/8967840"}
            target="_blank"
          >
            <Card
              useTagLink={false}
              title={
                "Online trajectory generation of a mav for chasing a moving target in 3d dense environments (IROS2019)"
              }
              imageSource="/images/bio/iros2019.png"
              tags={[Tag.TargetChasing, Tag.VisibilityMetric]}
            ></Card>
          </Link>
          <Link
            href={"https://ieeexplore.ieee.org/abstract/document/9196703"}
            target="_blank"
          >
            <Card
              useTagLink={false}
              title={
                "Integrated Motion Planner for Real-time Aerial Videography with a Drone in a Dense Environment (ICRA2020)"
              }
              imageSource="/images/bio/icra2020.png"
              tags={[Tag.CHOMP, Tag.Prediction]}
            ></Card>
          </Link>
          <Link
            href={"https://ieeexplore.ieee.org/abstract/document/9557293"}
            target="_blank"
          >
            <Card
              useTagLink={false}
              title={
                "Autonomous Aerial Dual-Target Following Among Obstacles (IEEE Access)"
              }
              imageSource="/images/bio/access.jpg"
              tags={[Tag.TargetChasing, Tag.OutdoorFlight]}
            ></Card>
          </Link>
          <div className="flex flex-row-reverse">
            <a
              href="https://scholar.google.com/citations?user=ssYQ2w4AAAAJ&hl=ko"
              className="link flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
              Discover more publications
            </a>
          </div>
          <br></br>
          <hr></hr>
          <h1>Projects</h1>
          Here are some of projects where I played a key role, including
          for-company and my-own-interest 🤠
          <Carousel
            data={[
              {
                title:
                  "Controller GUI for offboard ROS operation of multi-drone ",
                link: "https://github.com/icsl-Jeon/px4_code2",
                imageUrl: "/images/bio/px4-code2.png",
                hoverImageUrl: "/images/bio/px4-code2-hover.png",
              },

              {
                title: "🚘Autonomous driving in unstructured env.",
                link: "/posts/not_prepared",
                imageUrl: "/images/bio/autonomous-driving.JPG",
                hoverImageUrl: "/images/bio/autonomous-driving-hover.png",
              },
              {
                title: "🚨Multi fleet task allocation for rescue robots",
                link: "/posts/not_prepared",
                imageUrl: "/images/bio/disaster-robots.PNG",
                hoverImageUrl: "/images/bio/disaster-robots-hover.png",
              },

              {
                title: "some title",
                link: "/posts/post1",
                imageUrl: "/images/bio/iros2019.png",
              },
            ]}
          ></Carousel>
          <br></br>
          <hr></hr>
        </section>
      </Transition>
    </div>
  );
}
