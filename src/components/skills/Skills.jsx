import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CustomCursor from '../CostomCursor'
import Certification from './Certification'

const skills = [
  { name: "HTML", font: "font-sans" },
  { name: "CSS", font: "font-serif" },
  { name: "JavaScript", font: "font-mono" },
  { name: "MERN Stack", font: "font-bold" },
  { name: "Git", font: "italic" },
  { name: "GitHub", font: "underline" },
  { name: "Tailwind CSS", font: "font-extrabold" },
  { name: "Bootstrap", font: "font-light" },
  { name: "Redux", font: "font-light" },
];

const Skills = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let deltaX = e.clientX - window.innerWidth / 2;
      let deltaY = e.clientY - window.innerHeight / 2;
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div>
      <CustomCursor />
      <Certification />
      <div className="bg-gray-900 text-white  py-10 w-full flex flex-col items-center relative">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-6">My Skills</h2>
        <div
          className="w-full overflow-hidden bg-gray-800 p-6 rounded-lg shadow-lg relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="flex space-x-6"
            animate={{ x: isHovered ? "0%" : "-100%" }}
            transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          >
            {skills.concat(skills).map((skill, index) => (
              <div
                key={index}
                className="p-4 md:p-6 bg-gray-700 rounded-lg text-center shadow-lg opacity-80 hover:opacity-100 transition min-w-[120px] md:min-w-[150px]"
              >
                <p className={`text-lg md:text-2xl ${skill.font}`}>{skill.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className='w-full h-[20rem] overflow-hidden bg-yellow-500 flex justify-center items-center space-x-10'>
        {[...Array(2)].map((_, index) => (
          <div key={index} className='relative w-40 h-40 md:w-60 md:h-60 bg-gray-700 rounded-full flex items-center justify-center'>
            <div className='relative w-1/2 h-1/2 bg-gray-900 rounded-full'>
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className="line absolute h-10 w-full top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className='w-6 h-6 md:w-10 md:h-10 rounded-full bg-gray-100'></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
