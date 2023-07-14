import localFont from "next/font/local";
import "../styles/globals.css";
import type { AppProps } from "next/app";

const RhodyWide = localFont({
  src: "../public/fonts/mxi.woff2",
  display: "swap",
  variable: "--font-rhody",
});

const SpaceMono = localFont({
  src: "../public/fonts/SpaceMono-Regular.ttf",
  display: "swap",
  variable: "--font-space-mono",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${RhodyWide.variable} ${SpaceMono.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
