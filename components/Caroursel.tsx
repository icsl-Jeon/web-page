import { useState } from "react";

interface Props {
  data: Array<{
    src: string;
  }>;
}

const Carousel: React.FC<Props> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!data.length) return null;

  const currentVideo = data[currentIndex];

  return (
    <div className="my-8 mx-auto max-w-4xl">
      <video
        key={currentVideo.src}
        controls
        playsInline
        preload="metadata"
        className="block w-full rounded-lg bg-black shadow-lg"
        style={{ aspectRatio: "1286 / 782" }}
      >
        <source src={currentVideo.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="mt-3 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setCurrentIndex((index) => index - 1)}
          disabled={currentIndex === 0}
          aria-label="Previous video"
          className="h-10 w-10 shrink-0 rounded-md border border-gray-300 text-2xl leading-none hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-600 dark:hover:bg-gray-800"
        >
          &larr;
        </button>

        <button
          type="button"
          onClick={() => setCurrentIndex((index) => index + 1)}
          disabled={currentIndex === data.length - 1}
          aria-label="Next video"
          className="h-10 w-10 shrink-0 rounded-md border border-gray-300 text-2xl leading-none hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-600 dark:hover:bg-gray-800"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
