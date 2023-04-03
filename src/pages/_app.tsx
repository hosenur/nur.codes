import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {  Josefin_Sans } from "next/font/google";
import Script from "next/script";
import NextNProgress from "nextjs-progressbar";

const josefin = Josefin_Sans({
  weight: ["400","700"],
  subsets: ["latin"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
      <main className={josefin.className}>
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js"/>
        <NextNProgress options={{showSpinner:false}} color="black" />
        <Component {...pageProps} />
      </main>
  );
}
