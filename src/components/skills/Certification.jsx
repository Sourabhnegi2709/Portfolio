import React from 'react';
import { motion } from 'framer-motion';
import certificate from '../../assets/certificate.png'; // Make sure the path is correct

const Certification = () => {
    return (
        <div className="min-h-screen mt-[5rem] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 px-6 py-16 flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl items-center">
                {/* Left Side - Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="text-white"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        MERN Stack Development Certificate 🎓
                    </h2>
                    <p className="text-gray-300 text-md md:text-lg leading-relaxed">
                        I have successfully completed the{" "}
                        <span className="text-blue-400 font-semibold">Delta Full-Stack Web Development Course</span> from{" "}
                        <span className="text-blue-400 font-semibold">Apna College</span>. This journey has helped me strengthen my
                        skills in <strong>HTML, CSS, JavaScript, React, Node.js, Express, MongoDB</strong>, and more!
                        <br /><br />
                        Throughout the course, I built several projects, enhanced my problem-solving skills, and gained hands-on
                        experience in developing modern web applications.
                        <br /><br />
                        A big thank you to Apna College and the mentors for this incredible learning experience. Looking forward to
                        applying these skills in real-world projects and continuing my journey as a Full-Stack Web Developer.
                        <br /><br />
                        Feel free to connect! Let’s build and grow
                        together. 🚀💻
                    </p>
                </motion.div>

                {/* Right Side - Certificate Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="flex justify-center"
                >
                    <img
                        src={certificate}
                        alt="MERN Stack Certificate - Apna College"
                        className="rounded-xl shadow-2xl w-full max-w-md border-4 border-blue-500"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Certification;
