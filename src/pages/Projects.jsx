import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projects from "/data"; // ✅ data.js dan loyihalar keladi

const Projects = ({ language }) => {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-gray-800 text-white py-16">
      <div className="w-full max-w-5xl mx-auto px-5">
        {/* Sarlavha */}
        <motion.h1
          className="text-4xl font-bold text-center text-yellow-400 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {language === "UZ" ? "Mening Loyihalarim" : "My Projects"}
        </motion.h1>

        {/* Loyihalar kartochkalari */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-900 rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: project.id * 0.2 }}
            >
              {/* Rasm */}
              <img
                src={project.image}
                alt={project.title[language]}
                className="w-full h-auto object-cover md:object-cover lg:object-contain"
              />

              {/* Ma'lumotlar */}
              <div className="p-5">
                <h2 className="text-2xl font-bold mb-3">
                  {project.title[language]}
                </h2>
                <p className="text-gray-300 mb-5">
                  {project.description[language]}
                </p>

                {/* Tugmalar */}
                <div className="flex justify-between">
                  <Link
                    to={project.detailsLink}
                    className="px-4 py-2 bg-yellow-500 text-black font-medium rounded-lg hover:bg-yellow-600 transition-all"
                  >
                    {language === "UZ" ? "Batafsil" : "Details"}
                  </Link>
                  <a
                    href={project.vercelLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all"
                  >
                    {language === "UZ" ? "Vercel" : "Live Demo"}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
