import { useEffect, useState } from "react";
import { map } from "../map";
import Image from "next/image";

export const Card = ({
  title,
  tags,
  imageSource,
  useTagLink,
}: {
  title: string;
  tags?: Array<string>;
  imageSource: string;
  useTagLink: boolean;
}) => {
  return (
    <div className="my-5 flex justify-between items-center shadow-md hover:shadow-xl duration-300 max-h-32">
      <img className="object-contain h-32 " src={imageSource} alt={title}></img>
      <div className="sm:r-3 sm:pl-5 px-2 flex flex-col justify-between h-32 py-3">
        <p className="opacity-90 text-sm sm:text-base">{title} </p>
        <div className="hidden sm:inline">
          <div className="flex ">
            {tags?.map((tag) => (
              <div className="tag" key={tag}>
                {useTagLink ? (
                  <a className="text-xs" href={`/tags/${tag}`}>
                    {tag}
                  </a>
                ) : (
                  <div className="text-xs">{tag}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const PostSummary = ({ postKey }: { postKey: string }) => {
  const imageSource = `/images/${postKey}/thumbnail.jpg`;
  const tags = map.get(postKey)?.tag;
  const title = map.get(postKey)?.title;
  const date = map.get(postKey)?.date;
  return <Card title={title} tags={tags} />;
};
