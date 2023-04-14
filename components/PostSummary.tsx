export const Card = ({
  title,
  tags,
  imageSource,
  useTagLink,
}: {
  title: string | undefined;
  tags?: Array<string>;
  imageSource: string;
  useTagLink: boolean;
}) => {
  return (
    <div className="my-5 flex justify-between items-center shadow-md hover:shadow-xl duration-300 max-h-32">
      <img className="object-contain h-32 " src={imageSource} alt={title}></img>
      <div className="sm:r-3 sm:pl-5 px-2 flex flex-col justify-center sm:justify-between  h-32 py-3">
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
