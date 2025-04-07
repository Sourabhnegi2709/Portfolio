import React, { useEffect, useState } from "react";
import "@fontsource/roboto";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const navPaths = ["/home", "/about", "/projects", "/skills", "/contact"];
    const ContactPage = { contact: "/contact" };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav id="navbar" className={`fixed top-0 left-0 w-full h-[5rem] p-4 shadow-lg flex justify-between items-center transition-all duration-300 z-50 ${isScrolled ? "backdrop-blur-md bg-gray-800 bg-opacity-50" : "bg-gray-800"}`}>
            <div className="text-white text-2xl font-roboto font-bold">My portfolio</div>

            {/* Desktop Links */}
            <ul className="hidden md:flex gap-4 mr-5 font-roboto space-x-4">
                {["Home", "About", "Projects", "Skill"].map((item, index) => (
                    <Link key={index} to={navPaths[index]} className="hover:text-gray-400 text-white">
                        {item}
                    </Link>
                ))}
            </ul>

            <div className="hidden md:flex mr-5 font-roboto space-x-4">
                <Link to={ContactPage.contact} className="hover:text-gray-400 text-white">
                    Contact
                </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button onClick={toggleMenu} className="md:hidden text-white text-2xl focus:outline-none">
                {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
            </button>

            {/* Mobile Sidebar */}
            <motion.div 
                className={`fixed top-0 right-0 h-screen w-64 bg-gray-900 text-white shadow-lg flex flex-col justify-between z-50 transition-transform duration-300 md:hidden`}
                initial={{ x: "100%" }}
                animate={{ x: isOpen ? "0%" : "100%" }}
            >
                <div>
                    {/* Close Button */}
                    <div className="flex justify-end p-4">
                        <button onClick={toggleMenu} className="text-2xl">
                            <RiCloseLine />
                        </button>
                    </div>

                    {/* Nav Items */}
                    <ul className="flex flex-col items-center space-y-6 mt-10 text-lg">
                        {["Home", "About", "Projects", "Skill", "Contact"].map((item, index) => (
                            <Link 
                                key={index} 
                                to={index === 4 ? ContactPage.contact : navPaths[index]} 
                                className="hover:text-gray-400 text-white"
                                onClick={toggleMenu}
                            >
                                {item}
                            </Link>
                        ))}
                    </ul>
                </div>

                {/* Social Icons at Bottom */}
                <div className="flex justify-center gap-5 mb-6 text-xl">
                    <a href="https://github.com/Sourabhnegi2709" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><FaGithub /></a>
                    <a href="https://linkedin.com/in/saurabh-negi-809123324" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><FaLinkedin /></a>
                    <a href="https://instagram.com/negisaurabh_27" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><FaInstagram /></a>
                    <a href="mailto:sourabhnegi557@gmail.com" className="hover:text-gray-400"><FaEnvelope /></a>
                </div>
            </motion.div>
        </nav>
    );
}
