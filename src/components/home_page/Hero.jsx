import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import portfolio from '../../assets/gibili.png';


const words = ["Full-Stack Developer", "MERN Enthusiastic", "Tech Explorer"];

const Hero = () => {
    const [text, setText] = useState(" ");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(150);

    useEffect(() => {
        const currentWord = words[index];
        const updateText = () => {
            if (isDeleting) {
                setText((prev) => prev.slice(0, -1));
                setSpeed(100);
            } else {
                setText((prev) => currentWord.slice(0, prev.length + 1));
                setSpeed(150);
            }

            if (!isDeleting && text === currentWord) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % words.length);
            }
        };

        const typingTimer = setTimeout(updateText, speed);
        return () => clearTimeout(typingTimer);
    }, [text, isDeleting, index]);

    return (
        <div className="hero mt-[5rem] min-h-[87vh] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 flex items-center justify-center px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full items-center">
                {/* Left Side - Text Section */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-white text-center md:text-left"
                >
                    <h1 className="text-4xl md:text-6xl font-bold">
                        Hi, I'm Sourabh Negi
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-300">
                        <span className="text-blue-400 font-semibold">{text}</span>
                        <span className="animate-blink">|</span>
                    </p>
                    <motion.a
                        id="hire"
                        href="/contact"
                        whileHover={{ scale: 1.2, rotate: 3 }}
                        whileTap={{ scale: 0.9 }}
                        className="inline-block mt-6 px-6 py-3 text-lg font-semibold bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
                    >
                        Hire Me
                    </motion.a>
                </motion.div>

                {/* Right Side - Image with 3 Framer Effects */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.img
                        src={portfolio}
                        alt="Sourabh Negi"
                        className="w-64 h-94 md:w-80 md:h-80 rounded-2xl shadow-lg"
                        animate={{ y: [-6, -15, 3] }}
                        transition={{
                            repeat: Infinity,
                            duration: 4,
                            ease: "easeInOut"
                        }}
                        whileHover={{ scale: 1.05, rotate: -2 }}
                        whileTap={{ scale: 0.95 }}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
