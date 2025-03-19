import { useState, useEffect } from "react";
import clsx from "clsx";
import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

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
    const timer = setTimeout(() => {
      setIsLoaded(true);
    },10);

    return () =>clearTimeout(timer)
  },[])

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className={clsx("transition-opacity duration-1000 px-8", isLoaded ? "opacity-100" : "opacity-0")}>
        <AboutMe />
      </main>
      <footer className="h-16 border-t-2 border-[#163874]"></footer>
    </>
  );
}
