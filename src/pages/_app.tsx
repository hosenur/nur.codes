import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {  Space_Mono } from "next/font/google";
import Script from "next/script";
import NextNProgress from "nextjs-progressbar";

const space = Space_Mono({
  weight: ["400","700"],
  subsets: ["latin"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
      <main className={space.className}>
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js"/>
        <NextNProgress color="black" />
        <Component {...pageProps} />
      </main>
  );
}
