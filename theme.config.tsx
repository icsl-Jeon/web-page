import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Head from "next/head";

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "Nextra Docs Template",
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
