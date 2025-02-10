import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = ({ language }) => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-gray-800 text-white px-5">
      <div className="w-full max-w-4xl mx-auto px-5 py-12">
        <motion.div
          className="text-center space-y-6 bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Sarlavha */}
          <motion.h1
            className="text-6xl font-extrabold text-yellow-400 drop-shadow-lg"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {language === "UZ" ? "Salom!" : "Hello!"}
          </motion.h1>

          {/* Kirish matni */}
          <motion.p
            className="text-2xl font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            {language === "UZ"
              ? "Men Abdusattorov Asilbek. Portfoliomga hush kelibsiz!"
              : "I'm Abdusattorov Asilbek. Welcome to my portfolio!"}
          </motion.p>

          {/* Qo‘shimcha matn */}
          <motion.p
            className="text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          >
            {language === "UZ"
              ? "Men front-end dasturchiman va zamonaviy, samarali veb-saytlar yaratishga ixtisoslashganman. Ish tajribam davomida ko‘plab loyihalarni muvaffaqiyatli amalga oshirdim."
              : "I am a front-end developer specializing in creating modern, efficient websites. Throughout my career, I have successfully completed numerous projects."}
          </motion.p>

          <motion.p
            className="text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5, delay: 1.5 }}
          >
            {language === "UZ"
              ? "Dasturlashga bo‘lgan qiziqishim va ijodkorlik menga ajoyib loyihalar yaratishda yordam beradi. Mening ishlarim bilan tanishish uchun pastdagi tugmani bosing!"
              : "My passion for coding and creativity helps me craft amazing projects. Click the button below to explore my work!"}
          </motion.p>

          {/* Tugma */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <Link
              to="/projects"
              className="px-6 py-3 text-lg font-semibold rounded-xl bg-yellow-400 text-black shadow-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
            >
              {language === "UZ" ? "Loyihalarimni ko'rish" : "View My Projects"}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
