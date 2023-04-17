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
import { project, skills, hardware } from "../../data";
import ImageGrid from "../../components/ImageGrid";

export default function Index() {
  const [loaded, setLoaded] = useState(false);

  const [isPortrait, setIsPortrait] = useState(true);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(orientation: portrait)");

    function handleOrientationChange(event: MediaQueryListEvent) {
      setIsPortrait(event.matches);
    }

    setIsPortrait(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleOrientationChange);

    return () => {
      mediaQuery.removeEventListener("change", handleOrientationChange);
    };
  }, []);

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
      <div className="fixed z-50 w-full">
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
          <div className="my-5 flex justify-center sm:justify-start">
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
          <p>
            Thank you for visiting my website! I am a robotics engineer who
            loves building a robotic system and exploring the latest
            advancements in the field of robotics. <br></br> As a dedicated
            researcher and a developer with PhD, I have covered a wide range of
            areas from designing hardwares, object recognition, online spatial
            mapping, and motion planning & controls. <br></br>
            Through this website, I hope to share my expertise and insights with
            fellow robotics enthusiasts, students, and professionals. Here, you
            will find informative articles, tutorials, and reviews on the latest
            robotic technologies, as well as my thoughts on the future of
            robotics and its impact on society.
          </p>
          <br></br>
          <br></br>
          <hr></hr>
          <h1>Profile</h1>
          <h2>Education</h2>
          <ul>
            <li className="">
              Received BS in mechanical & aerospace engineering at{" "}
              <a href="https://en.snu.ac.kr/" className="link">
                Seoul National University
              </a>{" "}
              {""}
              of South Korea, 2013-2017.
            </li>
            <li className="">
              Received PhD in Robotics at Lab for Autonomous Robotics Research (
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
              , 2017-2022. ( <b>5 yrs graduation 🥷</b>)
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
            at Samsung Research, 2023~.
          </li>
          <br></br>

          <h2>Skills</h2>
          <h3>Real-time motion planning (major)</h3>
          <p>
            I majored in 3D real-time motion planning methods based on the 3D
            vision data, which can avoid obstacles (including dynamic ones) and
            chase a moving target. Although my main platform were drones, I can
            deal with mobile robots and robotic arms also.
          </p>
          <img
            className="object-contain "
            src="images/bio/capability-motion-planning.gif"
            alt={"Chasing two moving targets"}
          ></img>
          <ul>
            <li>
              Practical experiences in optimization-based planning methods such
              as LQR, STOMP, and{" "}
              <a
                className="link"
                href="https://github.com/icsl-Jeon/chomp_predict"
                target="_blank"
              >
                CHOMP{" "}
              </a>
              .
            </li>
            <li>
              Hierarchical{" "}
              <a
                className="link"
                href="https://github.com/icsl-Jeon/traj_gen"
                target="_href"
              >
                planning methods
              </a>{" "}
              which can joint global path planners and local planners.
            </li>
          </ul>
          <h3>Online 3D spatial mapping and object tracking</h3>
          <p>
            I can efficiently process the incoming sensor data into
            robot-recognizable forms for various tasks (obstacle mapping, target
            tracking and prediction).{" "}
          </p>
          <img
            className="object-contain "
            src="images/bio/capability-spatial mapping.gif"
            alt={"Predicting target by online mapping and object tracking"}
          ></img>
          <ul>
            <li>
              Online{" "}
              <a
                className="link"
                href="https://github.com/icsl-Jeon/octomap_mapping"
                target="_blank"
              >
                distance map
              </a>{" "}
              building from{" "}
              <a
                className="link"
                href="https://octomap.github.io/"
                target="_blank"
              >
                octomap
              </a>{" "}
              or{" "}
              <a
                className="link"
                href="https://github.com/ethz-asl/voxblox"
                target="_blank"
              >
                voxblox
              </a>{" "}
              .
            </li>
            <li>
              Object recognition,{" "}
              <a
                className="link"
                href="https://github.com/icsl-Jeon/zed2_client"
                target="_blank"
              >
                tracking pose,
              </a>{" "}
              and{" "}
              <a
                className="link"
                href="https://github.com/icsl-Jeon/chasing_utils"
                target="_blank"
              >
                motion prediction
              </a>
              .
            </li>
            <li>
              Hands-on-experience of visual inertia or lidar odometry algorithms
            </li>
          </ul>

          <h3>System integration and leading field experiments</h3>
          <p>
            As a robotics engineer, I am confident in scheduling, and performing
            experiments in any sites whether indoor, or outdoor.
          </p>
          <img
            className="object-contain "
            src="images/bio/capability-experiment.gif"
            alt={"Leading experiment"}
          ></img>

          <br></br>
          <hr></hr>

          <h1>Experiences</h1>
          <h2>Publications</h2>
          <p> My representative publications as the first author 📖</p>
          {/* TODO */}
          <Link
            href={"https://ieeexplore.ieee.org/document/8967840"}
            target="_blank"
          >
            <Card
              useTagLink={false}
              title={
                "Online trajectory generation of a mav for chasing a moving target in 3d dense environments "
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
                "Integrated Motion Planner for Real-time Aerial Videography with a Drone in a Dense Environment"
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
              title={"Autonomous Aerial Dual-Target Following Among Obstacles "}
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
                className="mr-2 h-6 w-6"
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
          <h2>Projects</h2>
          <p>
            Projects where I played a key role, including for-company and
            my-own-interest. (if your are mobile📱, kindly <u>click</u> below
            images to open links)
          </p>
          {!isPortrait && <Carousel data={project}></Carousel>}
          {isPortrait && <ImageGrid data={project}></ImageGrid>}
          <br></br>
          <hr></hr>

          <h1>Background</h1>
          <h2>Software</h2>
          <p>
            I am proficient in various languages including{" "}
            <b>C++, Python, Typescript, Matlab</b>. I am really comfortable to
            use the following frameworks & libraries:{" "}
          </p>
          <div className="p-1">
            <ImageGrid data={skills} border linkOn></ImageGrid>
          </div>
          <br></br>

          <h2>Hardware</h2>
          <p>
            I enjoy using the below sensors and making a robot systems 😀 All
            drones in the photos are <b>self-made</b>. You can check out how I
            built drones from{" "}
            <a
              href="https://www.youtube.com/playlist?list=PLD7bQSC6yVYE_56UMzphefky5rGsk-qNQ"
              target="_blank"
              className="link"
            >
              my Youtube channel
            </a>
            .
          </p>
          <div className="p-1">
            <ImageGrid data={hardware} border></ImageGrid>
          </div>
        </section>
      </Transition>
    </div>
  );
}
