import React, { useState } from 'react';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import gibili from '../../assets/gibili.png';
import CustomCursor from '../CostomCursor'



import { motion } from "framer-motion";

const AboutPage = () => {

  const [activeTab, setActiveTab] = useState('education');

  const renderContent = () => {
    switch (activeTab) {
      case 'education':
        return <Education />;
      case 'experience':
        return <Experience />;
      case 'skills':
        return <Skills />;
      default:
        return <Education />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center mt-[5rem] justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-6 text-white">
      <CustomCursor />
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img 
          src={gibili}
          alt="Your Name" 
          className="w-64 h-104 rounded-3xl shadow-2xl border-4 border-blue-400 object-cover"
        />
      </div>
      
      {/* About & Tabs Section */}
      <div className="md:w-1/2 mt-6 md:mt-0 text-center md:text-left">
        <h2 className="text-4xl font-extrabold text-blue-400 mb-4">About Me</h2>
        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
          I am a passionate Full-Stack Developer with expertise in modern web technologies. 
          I specialize in building scalable applications, creating elegant user interfaces, and 
          optimizing backend performance. With a deep understanding of React, Node.js, and MongoDB, 
          I aim to deliver high-quality, seamless digital experiences.
        </p>
        
        {/* Navigation Tabs */}
        <div className="flex justify-center md:justify-start space-x-4 mb-6">
          <motion.button 
          id='hire'
            className={`px-5 py-2 font-semibold rounded-lg transition-all duration-300 ${activeTab === 'education' ? 'bg-blue-500 text-white shadow-lg' : 'bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-white'}`} 
            onClick={() => setActiveTab('education')}
            whileHover={{ scale: 1.2, rotate: 3 }}
            transition={{ duration: .1, ease: "easeOut" }}
          >Education</motion.button>
          <motion.button 
          id='hire'
            className={`px-5 py-2 font-semibold rounded-lg transition-all duration-300 ${activeTab === 'experience' ? 'bg-blue-500 text-white shadow-lg' : 'bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-white'}`} 
            onClick={() => setActiveTab('experience')}
            whileHover={{ scale: 1.2, rotate: 3 }}
            transition={{ duration: .1, ease: "easeOut" }}
          >Experience</motion.button>
          <motion.button 
          id='hire'
            className={`px-5 py-2 font-semibold rounded-lg transition-all duration-300 ${activeTab === 'skills' ? 'bg-blue-500 text-white shadow-lg' : 'bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-white'}`} 
            onClick={() => setActiveTab('skills')}
            whileHover={{ scale: 1.2, rotate: 3 }}
            transition={{ duration: .1, ease: "easeOut" }}
          >Skills</motion.button>
        </div>
        
        {/* Content Section */}
        <div className="p-6 bg-gray-800 shadow-xl rounded-lg border border-gray-700">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;