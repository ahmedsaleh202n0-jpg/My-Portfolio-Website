import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download, Mail } from "lucide-react";

const HeroSection = () => {
    const handleScrollDown = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-6 overflow-hidden"
        >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-dark to-secondary/20 opacity-30" />
            <div className="absolute top-40 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-20" />
            <div className="absolute bottom-40 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl opacity-20" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 max-w-4xl mx-auto text-center"
            >
                {/* Avatar */}
                <motion.div variants={itemVariants} className="mb-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary p-1 shadow-2xl">
                        <div className="w-full h-full rounded-full bg-dark flex items-center justify-center overflow-hidden">
                            <div className="text-5xl font-bold text-primary">AS</div>
                        </div>
                    </div>
                </motion.div>

                {/* Main title and tagline */}
                <motion.div variants={itemVariants} className="mb-6">
                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-light via-primary to-secondary bg-clip-text text-transparent mb-4">
                        Ahmed Saleh
                    </h1>
                    <p className="text-xl md:text-2xl text-primary font-semibold mb-2">
                        Front-End Developer
                    </p>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Building modern, fast, and responsive web experiences with React and JavaScript. Passionate about clean code and user-centered design.
                    </p>
                </motion.div>

                {/* Call-to-action buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                >
                    <a
                        href="#contact"
                        className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                    >
                        <Mail size={20} />
                        Get in Touch
                    </a>
                    <a
                        href="/cv.pdf"
                        className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-glass backdrop-blur-sm transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                    >
                        <Download size={20} />
                        Download CV
                    </a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    variants={itemVariants}
                    className="mt-16 flex justify-center"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    onClick={handleScrollDown}
                    style={{ cursor: 'pointer' }}
                >
                    <div className="w-10 h-16 border-2 border-primary rounded-full flex items-start justify-center p-2 hover:border-secondary transition-colors duration-300">
                        <ChevronDown className="text-primary animate-pulse" size={24} />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
