import React from "react";
import { DocsThemeConfig, useTheme } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  feedback: {
    content: "",
  },
  primaryHue: 215,
  logo: (
    <p className="hover:scale-105">🔲</p>
  ),
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (true) {
      return {
        titleTemplate: "%s – Felipe Jeon",
      };
    }
  },
  editLink: {
    text: "",
  },
  search: {
    placeholder: "search anything 🦊",
  },
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1
  },
  footer: {
    text: (
      <div >
      </div>
    ),
  },
  head: function useHead() {
    return (
      <>
        <link rel="icon" href="/favicon.ico" type="image/ico" />
        <meta name="theme-color" content="#fff" />
        <meta name="og:title" content={"Boseong Jeon"} />
        <meta name="description" content="Web page of Boseong Jeon" />
      </>
    );
  },
};

export default config;
