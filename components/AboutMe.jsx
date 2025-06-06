import { useState, useEffect } from "react";
import { Linkedin, Github, Mail, MessageCircle } from "lucide-react";
import Typewriter from "./Typewriter";

export default function AboutMe() {
  const [iconSize, setIconSize] = useState(32);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIconSize(48);
      } else if (window.innerWidth >= 768) {
        setIconSize(40);
      } else {
        setIconSize(32);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="about-me"
      className="h-full max-w-screen-2xl mx-auto items-center justify-center pt-10 md:pt-16 lg:pt-32"
    >
      <div className="flex flex-col items-center w-full my-4 md:my-8 lg:my-12 mt-10 lg:mt-0">
        <Typewriter
          lines={["Hi, I'm Yair", "Full Stack Developer", "Based in Mexico"]}
          speed={100}
          className="text-3xl md:text-6xl 2xl:text-8xl bg-gradient-to-br from-[#007bff] to-[#6f42c1] text-transparent bg-clip-text"
        />

        <div className="relative flex justify-center items-center w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 my-6 md:my-8 lg:my-10 profile-container z-10">
          <img
            src="https://avatars.githubusercontent.com/u/161666687?v=4"
            alt="Yair"
            className="rounded-full w-full h-full object-cover bg-[#E8EEF8] dark:bg-black z-20"
          />
        </div>

        <div className="flex space-x-4 mt-4">
          <a
            href="https://github.com/Yairgg95"
            target="_blank"
            className="text-gray-800 dark:text-white"
          >
            <Github size={iconSize} className="hover:text-[#025CF7]" />
          </a>
          <a
            href="https://www.linkedin.com/in/yair-guadarrama-gg95"
            target="_blank"
            className="text-gray-800 dark:text-white "
          >
            <Linkedin size={iconSize} className="hover:text-[#025CF7]" />
          </a>
          <a
            href="mailto:yair.g.guadarrama@gmail.com"
            className="text-gray-800 dark:text-white"
          >
            <Mail size={iconSize} className="hover:text-[#025CF7]" />
          </a>
          <a
            href="https://wa.me/+525535586521"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-white"
          >
            <MessageCircle size={iconSize} className="hover:text-[#025CF7]" />
          </a>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row">
        <div className="md:w-2/3 text-center md:pr-14 md:text-left my-4 md:my-8 lg:mt-12">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
            BIOGRAPHY
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-4 md:mt-6 lg:mt-8 text-sm md:text-base lg:text-lg">
            I transitioned into web development out of a passion for building
            digital solutions. What started as curiosity became a drive to solve
            problems and create impactful applications. I specialize in frontend
            and backend technologies like JavaScript, React, Node.js, and
            MongoDB, and I'm currently expanding my expertise in Java and MySQL
            to develop scalable solutions.
          </p>
        </div>

        <div className="md:w-1/3 text-center md:text-left order-3 mt-4 md:my-8 lg:my-12">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
            EXPERIENCE YEARS
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-4 md:mt-6 text-sm md:text-base lg:text-lg">
            1+
          </p>
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-4 md:mt-8 text-gray-900 dark:text-white">
            SERVICES
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-4 md:mt-6 text-sm md:text-base lg:text-lg">
            Frontend, Backend, Cloud Solutions (AWS, GCP)
          </p>
        </div>
      </div>
    </section>
  );
}
