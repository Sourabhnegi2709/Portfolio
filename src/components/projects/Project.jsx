import React from 'react';
import { motion } from 'framer-motion';
import CustomCursor from '../CostomCursor'
import Zerodha from '../../assets/zerodha.png';
import Airbnb from '../../assets/airbnb.png';
import Spotify from '../../assets/spotify.png';
import Video from '../../assets/video.png';

const projects = [
  {
    title: "Airbnb Clone",
    description: "A full-featured rental booking platform similar to Airbnb, built using MERN stack with authentication, property listings, and booking functionality.",
    image: Airbnb,
    href: "https://new-project-rpdc.onrender.com",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"]
  },
  {
    title: "Stock Trading App",
    description: "A stock trading platform where users can buy and sell stocks, track their portfolio, and access real-time stock data.",
    image: Zerodha,
    href: "https://shiny-yeot-e4ffd0.netlify.app",
    techStack: ["React", "Vite", "Node.js", "Express", "JWT Authentication"]
  },
  {
    title: "Video Conferencing App",
    description: "A real-time video conferencing platform with chat functionality, screen sharing, and user authentication.",
    image: Video,
    href: "https://video-meet-frontend-2grn.onrender.com",
    techStack: ["React", "WebRTC", "Socket.io", "Node.js", "Tailwind CSS"]
  },
  {
    title: "Music Streaming App",
    description: "A Spotify-like music streaming platform with user authentication, playlist creation, and a vast song library.",
    image: Spotify,
    techStack: ["React", "Node.js", "Express", "MongoDB", "Redux"]
  },

];

const Project = () => {
  return (
    <div className="space-y-12 p-8 bg-gray-900 mt-[5rem] text-white shadow-lg">
      <CustomCursor />
      <h2 className="text-4xl font-bold text-blue-400 text-center mb-6">Projects</h2>
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 bg-gray-800 p-6 rounded-lg shadow-md`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Project Image */}
          <div className="md:w-1/2 flex justify-center p-6 bg-gray-700 rounded-lg shadow-md">
            <img
              onClick={() => window.open(project.href, "_blank")}
              src={project.image}
              alt={project.title}
              className="w-80 h-60 rounded-lg shadow-2xl object-cover border-4 border-blue-400"
            />
          </div>

          {/* Project Description */}
          <div className="md:w-1/2 text-center md:text-left p-6 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-yellow-400 mb-3">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <h4 className="text-xl font-semibold text-blue-300 mb-2">Tech Stack</h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="px-4 py-2 bg-gray-700 border border-blue-500 rounded-md text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Project;