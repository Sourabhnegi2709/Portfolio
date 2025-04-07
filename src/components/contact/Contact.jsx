import React from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import CustomCursor from '../CostomCursor';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_y7rkjn9',     // Replace with your EmailJS service ID
            'template_trgvtyj',    // Replace with your template ID
            e.target,
            '_ot0faB92cNyhS6l0'      // Replace with your EmailJS public key
        ).then(
            (result) => {
                console.log('Email sent:', result.text);
                alert('Message sent successfully!');
                e.target.reset(); // Clear the form
            },
            (error) => {
                console.error('EmailJS error:', error);
                alert('Failed to send message, please try again.');
                console.error(error);
            }
        );
    };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden px-4 sm:px-6 py-12 text-white">
            <CustomCursor />
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 animate-pulse opacity-20"></div>

            {/* Animated Bubbles */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {Array.from({ length: 30 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full opacity-50"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                        }}
                        animate={{
                            y: [Math.random() * window.innerHeight, 0],
                            opacity: [1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 3,
                            repeat: Infinity,
                        }}
                    />
                ))}
            </div>

            {/* Contact Form & Social Links */}
            <div className="relative z-10 w-full max-w-md text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">Contact Me</h1>

                {/* Social Media Links */}
                <div id="icon" className="flex justify-center gap-6 mb-8 text-2xl">
                    <a href="https://github.com/Sourabhnegi2709" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/saurabh-negi-809123324/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                        <FaLinkedin />
                    </a>
                    <a href="https://instagram.com/negisaurabh_27" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                        <FaInstagram />
                    </a>
                    <a href="mailto:sourabhnegi557@gmail.com" className="hover:text-red-400">
                        <FaEnvelope />
                    </a>
                </div>

                {/* Contact Form */}
                <form id='contact' onSubmit={sendEmail} className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg space-y-4 mx-auto">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="w-full px-4 py-2 rounded bg-black bg-opacity-50 border border-gray-600 placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 rounded bg-black bg-opacity-50 border border-gray-600 placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        className="w-full px-4 py-2 h-28 rounded bg-black bg-opacity-50 border border-gray-600 placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                    ></textarea>

                    <input type="hidden" name="time" value={new Date().toLocaleString()} />
                    <button
                        type="submit"
                        className="w-full px-6 py-2 bg-purple-600 hover:bg-purple-700 transition rounded text-white font-semibold"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
