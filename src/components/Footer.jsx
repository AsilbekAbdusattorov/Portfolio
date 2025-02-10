import React from "react";
import { FaInstagram, FaTelegramPlane, FaGithub, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from '../img/Logo.jpg'
const Footer = ({ language }) => {
  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="w-full max-w-7xl mx-auto px-5 flex flex-col md:flex-row md:justify-between items-center text-center md:text-left">
        
        {/* Logo va Ism */}
        <Link to="/" className="flex items-center space-x-3 mb-5 md:mb-0">
          <img
            src={Logo}
            alt="Logo"
            className="w-14 h-14 rounded-full shadow-lg border-2 border-white"
          />
          <span className="text-2xl font-semibold">
            {language === "UZ" ? "Abdusattorov Asilbek" : "Asilbek Abdusattorov"}
          </span>
        </Link>

        {/* Ijtimoiy tarmoqlar */}
        <div className="flex space-x-6 text-4xl mb-5 md:mb-0">
          <a
            href="https://www.instagram.com/abdusattorov_1307/?__pwa=1#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-transform transform hover:scale-110"
          >
            <FaInstagram />
          </a>

          <a
            href="https://t.me/Abdusattorov_Asilbek"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-transform transform hover:scale-110"
          >
            <FaTelegramPlane />
          </a>

          <a
            href="https://github.com/AsilbekAbdusattorov"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>
        </div>

        {/* Telefon raqam va Bog‘lanish linki */}
        <div className="text-center md:text-right">
          <p className="flex items-center justify-center md:justify-end space-x-2">
            <FaPhone className="text-lg" />
            <span>{language === "UZ" ? "+998 97 999 13 07" : "+998 97 999 13 07"}</span>
          </p>
          <Link
            to="/contact"
            className="mt-3 inline-block px-5 py-2 rounded-full bg-yellow-400 text-black font-medium hover:bg-yellow-500 transition-all duration-300"
          >
            {language === "UZ" ? "Bog‘lanish" : "Contact"}
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <p className="mt-5 text-gray-400 text-center">
        {language === "UZ" ? "© 2024 Barcha huquqlar himoyalangan." : "© 2024 All rights reserved."}
      </p>
    </footer>
  );
};

export default Footer;
