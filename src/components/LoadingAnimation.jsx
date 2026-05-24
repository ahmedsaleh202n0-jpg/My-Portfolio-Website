import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoadingAnimation = ({ duration = 2 }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, duration * 1000);

        return () => clearTimeout(timer);
    }, [duration]);

    if (!isVisible) return null;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.5 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 },
        },
    };

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark z-50 flex items-center justify-center"
        >
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8 text-center"
            >
                {/* Animated circles */}
                <div className="flex justify-center gap-4">
                    {[0, 1, 2].map((index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            animate={{
                                y: [0, -20, 0],
                                opacity: [0.3, 1, 0.3],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: index * 0.2,
                            }}
                            className="w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full"
                        />
                    ))}
                </div>

                {/* Text animation */}
                <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Ahmed Saleh
                    </h2>
                    <p className="text-gray-400 text-sm mt-2">Front-End Developer</p>
                </motion.div>

                {/* Loading bar */}
                <div className="w-32 h-1 bg-glass rounded-full overflow-hidden">
                    <motion.div
                        animate={{ width: ["0%", "100%"] }}
                        transition={{
                            duration: duration,
                            ease: "easeInOut",
                        }}
                        className="h-full bg-gradient-to-r from-primary to-secondary"
                    />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default LoadingAnimation;
