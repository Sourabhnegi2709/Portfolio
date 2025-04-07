import React from "react";
import { motion } from "framer-motion";

import Zerodha from "../../assets/zerodha.png";
import Airbnb from "../../assets/airbnb.png";
import Spotify from "../../assets/spotify.png";

const projects = [
  {
    name: "Spotify Clone",
    img: Spotify,
  },
  {
    name: "Zerodha Clone",
    img: Zerodha,
    href: "https://zerodha-clone.onrender.com",
  },
  {
    name: "Airbnb Clone",
    img: Airbnb,
    href: "https://new-project-rpdc.onrender.com",
  },
];

const Introduction = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 px-6 py-12 space-y-16">
      {/* About Me Section */}
      <div className="bg-gray-800 p-10 rounded-2xl shadow-lg text-white max-w-3xl border border-gray-700">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-100">About Me</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          I'm a passionate <span className="text-blue-400 font-semibold">Full-Stack Web Developer</span> skilled in building dynamic and responsive web applications using the MERN stack. I specialize in clean, scalable code and staying current with modern development trends.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Currently pursuing a <span className="text-blue-400">Bachelor of Computer Applications (2022–2025)</span>, I’ve built several projects demonstrating practical solutions to real-world problems. My toolkit includes <span className="text-blue-400">React, Tailwind CSS, Node.js, Express, MongoDB</span>, and version control with Git & GitHub.
        </p>
      </div>

      {/* Projects Section */}
      <div className="w-full max-w-6xl">
        <h2 className="text-4xl font-extrabold mb-8 text-gray-100 text-center">Projects</h2>
        <div className="flex flex-wrap justify-center gap-8 px-4">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[280px] max-w-[320px] h-[220px] rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 shadow-lg group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full h-full"
              >
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 via-transparent to-transparent text-white">
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
