import { useState, useRef, useEffect } from "react";

interface Props {
  data: Array<{
    title: string;
    link: string;
    imageUrl: string;
    hoverImageUrl: string;
  }>;
}

const ImageGrid: React.FC<Props> = ({ data }) => {
  return (
    <div className="relative">
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 ">
        {data.map((item) => (
          <a
            href={item.link}
            target="_blank"
            className="aspect-square block bg-origin-padding bg-left-top bg-cover"
            style={{ backgroundImage: `url(${item.imageUrl || ""})` }}
          ></a>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
