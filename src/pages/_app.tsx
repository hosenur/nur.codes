import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {  Fira_Mono } from "next/font/google";
import Script from "next/script";
import NextNProgress from "nextjs-progressbar";

const fira = Fira_Mono({
  weight: ["400","500","700"],
  subsets: ["latin"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
      <main className={fira.className}>
        <NextNProgress color="black" />
        <Component {...pageProps} />
      </main>
  );
}
