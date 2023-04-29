import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {  Quicksand } from "next/font/google";
import Script from "next/script";
import NextNProgress from "nextjs-progressbar";
import { Lenis as ReactLenis } from '@studio-freight/react-lenis'

const josefin = Quicksand({
  weight: ["400","700"],
  subsets: ["latin"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
      <main className={josefin.className}>
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js"/>
        <NextNProgress options={{showSpinner:false}} color="black" />
        <ReactLenis root >
        <Component {...pageProps} />
        </ReactLenis>
      </main>
  );
}
