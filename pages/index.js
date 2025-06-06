import { useState, useEffect } from "react";
import clsx from "clsx";
import Navbar from "@/components/Navbar";
import AboutMe from "@/components/AboutMe";
import Portfolio from "@/components/Portfolio";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParallaxIntro from "@/components/ParallaxIntro";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    if (showContent) {
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [showContent]);

  return (
    <>
      {!showContent && <ParallaxIntro onFinish={() => setShowContent(true)} />}
      {showContent && (
        <>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <main
            className={clsx(
              "transition-opacity duration-1000 px-8",
              isLoaded ? "opacity-100" : "opacity-0"
            )}
          >
            <AboutMe />
            <Portfolio />
            <Resume />
            <Contact />
          </main>
          <Footer darkMode={darkMode} />
        </>
      )}
    </>
  );
}
