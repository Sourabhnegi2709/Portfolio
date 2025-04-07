import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer id='footer' className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; 2025 My Portfolio. All rights reserved.</p>
                <div className="flex justify-center mt-[1rem] gap-6 mb-12 text-2xl">
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
            </div>
        </footer>
    )
}