import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {  Ubuntu_Mono } from "next/font/google";
import Script from "next/script";
import NextNProgress from "nextjs-progressbar";

const ubuntu = Ubuntu_Mono({
  weight: ["400","700"],
  subsets: ["latin"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
      <main className={ubuntu.className}>
        <NextNProgress color="black" />
        <Component {...pageProps} />
      </main>
  );
}
