import Head from "next/head";
import "../styles/global.css";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head> </Head>
      <Component {...pageProps} />
    </div>
  );
}
