import localFont from "next/font/local";
import "../styles/globals.css";
import type { AppProps } from "next/app";

const RhodyWide = localFont({
  src: "./RhodyWide-Regular.woff2",
  display: "swap",
  variable: "--font-rhody-wide",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={RhodyWide.className}>
      <Component {...pageProps} />
    </main>
  );
}
