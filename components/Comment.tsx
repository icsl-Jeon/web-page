import { useEffect, useRef, memo } from "react";
import type { FC } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

export interface Props {}

const Comment: FC<Props> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { locale } = useRouter();
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const theme = resolvedTheme === "dark" ? "dark_dimmed" : "light";
    const giscusEl: HTMLIFrameElement = ref.current.querySelector(
      "iframe.giscus-frame"
    );
    const createGiscus = () => {
      const script = document.createElement("script");
      const attributes = {
        src: "https://giscus.app/client.js",
        "data-repo": "icsl-Jeon/web-page",
        "data-repo-id": "R_kgDOJMXoaw",
        "data-category": "General",
        "data-category-id": "DIC_kwDOJMXoa84CV6ru",
        "data-mapping": "pathname",
        "data-reactions-enabled": "1",
        "data-emit-metadata": "0",
        "data-input-position": "bottom",
        "data-theme": theme,
        "data-lang": "en",
        crossOrigin: "anonymous",
        async: "true",
      };
      Object.entries(attributes).forEach(([key, value]) =>
        script.setAttribute(key, value)
      );
      ref.current?.appendChild(script);
    };

    const postThemeMessage = () => {
      giscusEl.contentWindow.postMessage(
        { giscus: { setConfig: { theme } } },
        "https://giscus.app"
      );
    };

    giscusEl ? postThemeMessage() : createGiscus();
  }, [resolvedTheme]);
  return <div ref={ref} className="mt-10" />;
};

export default memo(Comment);
