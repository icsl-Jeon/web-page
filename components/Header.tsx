import React, { useState, useEffect } from "react";
import { PageCategory } from "../lib/types";
import Link from "next/link";

export default function Header({ category }: { category?: PageCategory }) {
  const [collapse, setCollapse] = useState(true);
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
    if (isPortrait) {
      setCollapse(true);
    } else {
      setCollapse(false);
    }
  }, [isPortrait]);

  return (
    <div
      className={`flex ${isPortrait ? "flex-col" : "flex-row"}
       bg-slate-100 w-full shadow-md p-2  items-center `}
    >
      <div className="flex flex-row justify-between  sm:ml-4 sm:mr-8 items-center  ">
        {isPortrait && (
          <button
            className=""
            onClick={() => {
              setCollapse(!collapse);
            }}
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 "
            >
              <path
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
        {!isPortrait && (
          <a href="/">
            <img
              src="/images/fox.png"
              alt="brand logo"
              className="object-contain h-12 hover:translate-x-1 hover:scale-105 transition-transform duration-300"
            />
          </a>
        )}
      </div>

      {Object.keys(PageCategory).map((key) => {
        const categoryKey = key as keyof typeof PageCategory;
        const isActive = categoryKey === String(category);

        return (
          <div
            key={key}
            className={`m-1 p-3 ${
              collapse ? "hidden" : "inline"
            }  rounded-xl text-gray-600 hover:text-orange-300 transition-transform  transition-colors duration-200  text-xl ${
              isActive ? " text-orange-500" : ""
            }`}
          >
            <Link href={""}>{String(PageCategory[categoryKey])}</Link>
          </div>
        );
      })}
    </div>
  );
}
