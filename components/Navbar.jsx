import { Sun, Moon, Menu, X } from "lucide-react";
import clsx from "clsx";
import { useState } from "react";

export default function Navbar({ darkMode, setDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#about-me");

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const togglMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const menuItems = [
    { name: "About Me", href: "#about-me" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-[#E8EEF8] dark:bg-black flex justify-between  items-center px-4 sticky top-0 w-full shadow-md h-16 border-b-2 border-[#163874] dark:border-[#5C92F0] z-50">
      <a href="/" className="h-10 md:h-14 lg:h-16">
        <img
          src={darkMode ? "/assets/YairG-logo-dark-mode.png" : "/assets/YairG-logo.png"}
          alt="YairG-logo"
          className="h-full w-auto object-contain"
        />
      </a>
      <ul className="hidden lg:flex items-center space-x-4 h-full">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              onClick={() => setActiveLink(item.href)}
              className={clsx(
                "hover:text-[#6f42c1] dark:hover:text-[#025CF7] font-semibold transition-colors",
                activeLink === item.href
                  ? "text-[#025CF7] dark:text-[#5C92F0]"
                  : "text-black dark:text-white"
              )}
            >
              {item.name}
            </a>
          </li>
        ))}
        <li>
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:text-[#025CF7] dark:hover:text-yellow-500 hover:scale-110">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </li>
      </ul>

      <button
        onClick={togglMenu}
        className="lg:hidden p-2 rounded-md focus:outline-none"
      >
        {isMenuOpen ? <X size={24} className="text-[#025CF7]" /> : <Menu size={24} className="transition-colors hover:text-[#025CF7]" />}
      </button>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#E8EEF8] dark:bg-black shadow-lg z-50">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => {
                    setActiveLink(item.href);
                    setIsMenuOpen(false);
                  }}
                  className={clsx(
                    "block text-lg hover:underline transition-colors",
                    activeLink === item.href
                      ? "text-[#025CF7]"
                      : "text-black dark:text-white"
                  )}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <button onClick={toggleDarkMode} className="p-2 rounded-full">
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
