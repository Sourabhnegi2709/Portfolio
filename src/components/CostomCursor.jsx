import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isVisible, setIsVisible] = useState(true);

    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const springX = useSpring(mouseX, { damping: 25, stiffness: 300 });
    const springY = useSpring(mouseY, { damping: 25, stiffness: 300 });

    useEffect(() => {
        const moveCursor = (e) => {
            const isOverNavbar = e.target.closest('#navbar');
            const isOverFooter = e.target.closest('#footer');
            const isOverContact = e.target.closest('#contact');
            const isOverIcon= e.target.closest('#icon');
            const isOverHire= e.target.closest('#hire');
            const isOverProject= e.target.closest('#project');

            // ✅ Fix: hide if over either navbar or footer
            setIsVisible(!(isOverNavbar || isOverFooter || isOverContact || isOverIcon || isOverHire || isOverProject));

            mouseX.set(e.clientX - 30);
            mouseY.set(e.clientY - 30);
        };

        const hideCursor = () => setIsVisible(false);
        const showCursor = () => setIsVisible(true);

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseout', hideCursor);
        window.addEventListener('mouseover', showCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseout', hideCursor);
            window.removeEventListener('mouseover', showCursor);
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 flex items-center justify-center w-[60px] h-[60px] rounded-full bg-purple-600 text-white text-[12px] sm:text-sm font-semibold pointer-events-none z-[9999] mix-blend-difference leading-none text-center"
            style={{
                translateX: springX,
                translateY: springY,
                opacity: isVisible ? 1 : 0,
            }}
        >
            Hire Me
        </motion.div>
    );
};

export default CustomCursor;
