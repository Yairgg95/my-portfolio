import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
export default function Footer({darkMode}) {
  return (
    <footer className=" border-t-2 border-[#163874] dark:border-[#5C92F0] flex flex-col items-center mt-6 md:mt-16">
      <a href="/" className="h-16">
        <img
          src={darkMode ? "/assets/YairG-logo-dark-mode.png" : "/assets/YairG-logo.png"}
          alt="YairG-logo"
          className="h-full w-auto object-contain"
        />
      </a>

      <h2 className="text-xl md:text-3xl  text-center font-bold bg-gradient-to-br from-[#007bff] to-[#6f42c1] text-transparent bg-clip-text">
        Full Stack Developer
      </h2>

      <div className="flex space-x-4 mt-4">
        <a
          href="https://github.com/Yairgg95"
          target="_blank"
          className="text-gray-800 dark:text-white"
        >
          <Github size={24} className="hover:text-[#025CF7]" />
        </a>
        <a
          href="https://www.linkedin.com/in/yair-guadarrama-gg95"
          target="_blank"
          className="text-gray-800 dark:text-white "
        >
          <Linkedin size={24} className="hover:text-[#025CF7]" />
        </a>
        <a
          href="mailto:yair.g.guadarrama@gmail.com"
          className="text-gray-800 dark:text-white"
        >
          <Mail size={24} className="hover:text-[#025CF7]" />
        </a>
        <a
          href="https://wa.me/+525535586521"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-white"
        >
          <MessageCircle size={24} className="hover:text-[#025CF7]" />
        </a>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 mb-7">
        © {new Date().getFullYear()} Yair. All rights reserved.
      </p>
    </footer>
  );
}
