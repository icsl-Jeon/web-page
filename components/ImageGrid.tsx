import { useState, useRef, useEffect } from "react";

interface Props {

  border?: boolean;
  linkOn?: boolean;
  data: Array<{
    title: string;
    link: string;
    imageUrl: string;
  }>;
}

const ImageGrid: React.FC<Props> = ({ border, data, linkOn }) => {

  return (
    <div className="relative">
      <div className={`grid grid-cols-4 gap-1 sm:grid-cols-6`}>
        {data.map((item) => (
          <div className="relative" key={item.title}>
            <a
              href={linkOn ? item.link : undefined}
              target="_blank"
              className={`block aspect-square bg-cover bg-left-top bg-origin-padding ${
                border ? "border border-gray-200" : ""
              } duration-700 hover:opacity-25`}
              style={{ backgroundImage: `url(${item.imageUrl || ""})` }}
            ></a>
            <a
              href={linkOn ? item.link : undefined}
              target="_blank"
              className="absolute top-0 left-0 z-10 flex aspect-square h-full w-full flex-col flex-col-reverse bg-cover bg-left-top bg-no-repeat bg-origin-padding opacity-0 transition-opacity duration-700 hover:opacity-90"
            >
              <div className="w-full bg-white bg-opacity-70 p-1 text-center text-black ">
                {item.title}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
