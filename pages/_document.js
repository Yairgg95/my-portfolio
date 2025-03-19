import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {


  return (
    <Html lang="en">
      <Head />
      <body className="antialiased grid grid-rows-[auto_1fr_auto] min-h-screen bg-[#E8EEF8] text-black dark:bg-black dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
