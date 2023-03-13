import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({
  weight: ["100", "200", "400", "500", "600", "700"],
  subsets: ["latin"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={josefin.className}>
      <Component {...pageProps} />;
    </main>
  );
}
