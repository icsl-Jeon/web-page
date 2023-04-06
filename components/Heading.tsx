import { useEffect, useState } from "react";
import Swal from "sweetalert2";

interface Props {
  level: number;
  children: string;
}

const Heading: React.FC<Props> = ({ level, children }) => {
  const TagName = `h${level}` as keyof JSX.IntrinsicElements;
  const [hover, setHover] = useState(false);
  const anchor = children.replace(/\s+/g, "-").toLowerCase();

  return (
    <div
      className="my-5"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <TagName id={anchor} className="inline">
        {children}
      </TagName>
      {
        <button
          className="ml-3 inline-block opacity-20 hover:opacity-80"
          onClick={() => {
            const anchorLink = window.location.href.concat("#", anchor);
            navigator.clipboard.writeText(anchorLink);
            Swal.fire({
              title: "",
              text: "Copied to clipboard !",
              position: "bottom-start",
              timer: 1500,
              width: "30rem",
              showConfirmButton: false,
              backdrop: false,
            })
              .then((result) => {})
              .catch(() => {});
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
            />
          </svg>
        </button>
      }
    </div>
  );
};

export default Heading;
