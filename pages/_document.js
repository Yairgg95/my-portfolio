import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="title"
          content="Yair Guadarrama | Full-Stack Developer & UI/UX Enthusiast"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="full-stack developer, APIs, scalable systems, cloud solutions, backend, web development, software engineering"
        />
        <meta
          name="description"
          content="Full-stack developer specializing in scalable systems, APIs, and modern web solutions. Let's build something amazing together!"
        />

        <meta
          property="og:title"
          content="Yair Guadarrama | Full-Stack Developer & UI/UX Enthusiast"
        />
        <meta
          property="og:description"
          content="Full-stack developer specializing in scalable systems, APIs, and modern web solutions. Let's build something amazing together!"
        />
        <meta property="og:url" content="https://www.yairggdev.lat" />

        <link rel="icon" href="/assets/YG-meta.png" />
      </Head>
      <body className="antialiased min-h-screen bg-[#E8EEF8] text-black dark:bg-black dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
