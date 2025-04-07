import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";


const skills = [
  { name: "HTML", font: "font-sans" },
  { name: "CSS", font: "font-serif" },
  { name: "JavaScript", font: "font-mono" },
  { name: "MERN Stack", font: "font-bold" },
  { name: "Git", font: "italic" },
  { name: "GitHub", font: "underline" },
  { name: "Tailwind CSS", font: "font-extrabold" },
  { name: "Bootstrap", font: "font-light" },
  { name: "redux", font: "font-light" },
];

const Skills = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;


      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    })
  })

  return (
    <div>
      <div className="bg-gray-900 text-white py-10 w-full flex flex-col items-center relative">
        <h2 className="text-center text-3xl font-bold mb-6">My Skills</h2>
        <div
          className="w-full overflow-hidden bg-gray-800 p-6 rounded-lg shadow-lg relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-900 to-transparent opacity-50"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-900 to-transparent opacity-50"></div>
          <motion.div
            className="flex space-x-6"
            animate={{ x: isHovered ? "0%" : "-100%" }}
            transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          >
            {skills.concat(skills).map((skill, index) => (
              <div
                key={index}
                className="p-6 bg-gray-700 rounded-lg text-center shadow-lg opacity-80 hover:opacity-100 transition min-w-[150px]"
              >
                <p className={`text-2xl ${skill.font}`}>{skill.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>


     
    </div>
  );
};

export default Skills;
