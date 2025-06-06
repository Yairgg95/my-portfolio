import "@/styles/globals.css";
import Head from "next/head";
import { Toaster } from "sonner";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Yair Guadarrama | Full-Stack Developer & UI/UX Enthusiast</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}
