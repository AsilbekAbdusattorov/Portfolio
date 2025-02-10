import React from "react";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../img/Logo.jpg";
import Github from "../img/github.png";

const Header = ({ language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gradient-to-r from-blue-700 to-gray-800 text-white shadow-md py-4 px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-4">
          <motion.img
            src={Logo}
            alt="Logo"
            className="h-16 rounded-full shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </Link>

        {/* Menu for Large Screens */}
        <nav className="hidden lg:flex space-x-8">
          {["about", "projects", "contact"].map((section) => (
            <NavLink
              key={section}
              to={`${section}`}
              className="text-lg font-medium relative text-white transition-all duration-300 hover:text-yellow-400 before:absolute before:content-[''] before:w-0 before:h-0.5 before:bg-yellow-400 before:bottom-0 before:left-1/2 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0"
            >
              {language === "UZ"
                ? section === "about"
                  ? "Men haqimda"
                  : section === "projects"
                  ? "Loyihalar"
                  : "Bog‘lanish"
                : section === "about"
                ? "About Me"
                : section === "projects"
                ? "Projects"
                : "Contact"}
            </NavLink>
          ))}
        </nav>

        {/* Language Toggle */}
        <div className="hidden lg:flex space-x-2">
          {["UZ", "ENG"].map((lang) => (
            <button
              key={lang}
              className={`text-lg font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                language === lang
                  ? "bg-white text-black"
                  : "bg-transparent border-2 border-white hover:bg-yellow-400 hover:text-black"
              }`}
              onClick={() => setLanguage(lang)}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="hidden lg:block">
          <NavLink
            to="https://github.com/AsilbekAbdusattorov"
            target="_blank"
            className="text-lg font-medium px-4 py-2 rounded-full flex items-center transition-all duration-300 bg-white text-black hover:bg-blue-500"
          >
            <img className="w-10 rounded-full mr-2" src={Github} alt="github" /> GitHub
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-3xl focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end`}
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? "0%" : "100%" }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-gradient-to-r from-blue-700 to-gray-800 w-3/4 h-full p-6 flex flex-col space-y-8 shadow-lg">
          <button className="text-white text-3xl self-end" onClick={toggleMenu}>
            ✖
          </button>

          {/* Mobile Nav Links */}
          <div className="flex flex-col items-center space-y-6">
            {["about", "projects", "contact"].map((section) => (
              <NavLink
                key={section}
                to={`${section}`}
                className="text-lg font-medium text-white transition-all duration-300 hover:text-yellow-400"
                onClick={toggleMenu}
              >
                {language === "UZ"
                  ? section === "about"
                    ? "Men haqimda"
                    : section === "projects"
                    ? "Loyihalar"
                    : "Bog‘lanish"
                  : section === "about"
                  ? "About Me"
                  : section === "projects"
                  ? "Projects"
                  : "Contact"}
              </NavLink>
            ))}
          </div>

          {/* Mobile Language Toggle */}
          <div className="flex space-x-3 justify-center">
            {["UZ", "ENG"].map((lang) => (
              <button
                key={lang}
                className={`text-lg font-medium px-5 py-2 rounded-full transition-all duration-300 border-2 ${
                  language === lang
                    ? "bg-white text-black"
                    : "border-white text-white hover:bg-yellow-400 hover:text-black"
                }`}
                onClick={() => setLanguage(lang)}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Mobile GitHub Button */}
          <NavLink
            to="https://github.com/your-github"
            target="_blank"
            className="text-lg font-medium text-center px-5 py-3 rounded-full flex items-center justify-center transition-all duration-300 bg-white text-black hover:bg-yellow-400 shadow-lg hover:shadow-yellow-500/50"
          >
            <img className="w-8 rounded-full mr-2" src={Github} alt="github" /> GitHub
          </NavLink>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
