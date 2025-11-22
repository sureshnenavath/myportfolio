import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionTemplate } from 'framer-motion';

const Spotlight = ({ children, className = "" }) => {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    const mouseXSpring = useSpring(0, { stiffness: 50, damping: 20 });
    const mouseYSpring = useSpring(0, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            setMouseX(clientX);
            setMouseY(clientY);
            mouseXSpring.set(clientX);
            mouseYSpring.set(clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [mouseXSpring, mouseYSpring]);

    const background = useMotionTemplate`radial-gradient(
    600px circle at ${mouseXSpring}px ${mouseYSpring}px,
    rgba(99, 102, 241, 0.15),
    transparent 80%
  )`;

    return (
        <div className={`relative w-full h-full overflow-hidden ${className}`}>
            <motion.div
                className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
                style={{
                    background,
                }}
            />
            {children}
        </div>
    );
};

export default Spotlight;
