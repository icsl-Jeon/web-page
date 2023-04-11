import { useState, useRef, useEffect } from "react";

interface Props {
  data: Array<{
    title: string;
    link: string;
    imageUrl: string;
    hoverImageUrl: string;
  }>;
}

const Carousel: React.FC<Props> = ({ data }) => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef<any>(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction: string) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel my-8 mx-auto">
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          {!isDisabled("prev") ? (
            <button
              onClick={movePrev}
              className="hover:text-orange-400 bg-gradient-to-l from-transparent to-gray-600 text-orange-100 w-10 h-full text-center opacity-70 hover:opacity-80 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
              // disabled={isDisabled("prev")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-20 -ml-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="sr-only">Prev</span>
            </button>
          ) : (
            <div />
          )}
          {!isDisabled("next") ? (
            <button
              onClick={moveNext}
              className="hover:text-orange-400 bg-gradient-to-r from-transparent to-gray-600 text-orange-100 w-10 h-full text-center opacity-70 hover:opacity-80 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
              disabled={isDisabled("next")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-20 -ml-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="sr-only">Next</span>
            </button>
          ) : (
            <div />
          )}
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {data.map((resource, index) => {
            return (
              <div
                key={index}
                className="carousel-item text-center relative w-64 h-64 snap-start  rounded-full"
              >
                <a
                  href={resource.link}
                  target="_blank"
                  className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover  z-0 hover:opacity-0"
                  style={{ backgroundImage: `url(${resource.imageUrl || ""})` }}
                ></a>
                <a
                  href={resource.link}
                  target="_blank"
                  className=" h-full w-full aspect-square  absolute top-0 left-0 bg-origin-padding bg-left-top bg-cover bg-no-repeat transition-opacity duration-700 opacity-0 hover:opacity-90 z-10 grid place-content-end"
                  style={{
                    backgroundImage: `url(${resource.hoverImageUrl || ""})`,
                  }}
                >
                  <h3 className="text-black p-1 mx-auto text-2xl bg-white bg-opacity-40">
                    {resource.title}
                  </h3>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
