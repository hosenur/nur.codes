import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({
  weight: ["100", "200", "400", "500", "600", "700"],
  subsets: ["latin"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="black" enableSystem={false}>
      <main className={josefin.className}>
        <Component {...pageProps} />;
      </main>
    </ThemeProvider>
  );
}
