import React from "react";
import { motion } from "framer-motion";
import Myimg from '../img/myimg.png';

const About = ({ language }) => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-gray-800 text-white py-16">
      <div className="w-full max-w-5xl mx-auto px-5 flex flex-col md:flex-row items-center gap-12">
        
        {/* Rasm */}
        <motion.div 
          className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-yellow-400"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img 
            src={Myimg} 
            alt="Abdusattorov Asilbek" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Matn qismi */}
        <motion.div 
          className="text-center md:text-left space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold text-yellow-400">
            {language === "UZ" ? "Men haqimda" : "About Me"}
          </h1>
          <p className="text-lg leading-relaxed">
            {language === "UZ" 
              ? "Men Abdusattorov Asilbek, O'zbekistonlikman. 2007 yilda tug‘ilganman. Men Frontend dasturchiman va quyidagi texnologiyalarni bilaman:"
              : "I'm Abdusattorov Asilbek, from Uzbekistan. Born in 2007. I'm a Frontend Developer and I have experience with the following technologies:"}
          </p>
          
          {/* Texnologiyalar */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {["HTML", "CSS", "JavaScript", "Tailwind CSS", "React.js"].map((tech, index) => (
              <div 
                key={index} 
                className="px-5 py-3 border-2 border-yellow-400 rounded-lg shadow-md text-center text-lg font-semibold bg-gray-800 hover:bg-gray-700 transition-all duration-300"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
