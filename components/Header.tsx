import React, { useState, useEffect } from "react";
import { PageCategory } from "../lib/types";
import Link from "next/link";

export default function Header({ category }: { category?: PageCategory }) {
  const [collapse, setCollapse] = useState(false);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (width > 500) setCollapse(false);
  }, [width]);

  return (
    <div className=" flex flex-col sm:flex-row z-30 bg-slate-50 w-full shadow-md p-2  items-center">
      <div className="flex flex-row justify-between  sm:ml-4 sm:mr-8 items-center -translate-y-1  ">
        <button
          className="block sm:hidden"
          onClick={() => {
            setCollapse(!collapse);
          }}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-10 h-10 "
          >
            <path
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <a href="/">
          <img
            src="/images/fox.png"
            alt="brand logo"
            className="hidden sm:inline-block object-contain h-12 hover:translate-x-1 hover:scale-105 transition-transform duration-300"
          />
        </a>
      </div>

      {!collapse &&
        Object.keys(PageCategory).map((key) => {
          const categoryKey = key as keyof typeof PageCategory;
          const isActive = categoryKey === String(category);

          return (
            <div
              className={`m-1 p-3 rounded-xl text-gray-600 hover:text-orange-300 transition-colors duration-200  text-2xl ${
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