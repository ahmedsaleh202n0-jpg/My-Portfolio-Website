import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section id="about" className="min-h-screen flex items-center py-20 px-6 bg-gradient-to-b from-dark to-dark/95">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-primary">About</span> Me
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* Left side - Text */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <p className="text-lg text-gray-300 leading-relaxed">
                            I'm a passionate Front-End Developer based in Egypt, specializing in creating beautiful and responsive web applications. With a strong foundation in React and JavaScript, I love turning ideas into interactive experiences.
                        </p>

                        <p className="text-lg text-gray-300 leading-relaxed">
                            My journey in web development started with curiosity and has evolved into a dedication to creating clean, maintainable code and intuitive user interfaces. I'm constantly learning and exploring new technologies to stay at the forefront of modern web development.
                        </p>

                        <div className="space-y-3">
                            <p className="text-lg font-semibold text-light">Key Skills:</p>
                            <ul className="grid grid-cols-2 gap-3">
                                {['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Responsive Design', 'Git & GitHub', 'RESTful APIs'].map((skill) => (
                                    <li key={skill} className="flex items-center gap-2 text-gray-300">
                                        <span className="w-2 h-2 bg-primary rounded-full" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Right side - Glassmorphism card */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-glass backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-primary/20 transition-shadow duration-300"
                    >
                        <div className="space-y-6">
                            <div>
                                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Current Focus</p>
                                <p className="text-xl font-bold text-light">Front-End Development</p>
                            </div>
                            <div className="border-t border-white/10 pt-6">
                                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Education</p>
                                <p className="text-light font-semibold mb-1">Diploma of Commerce</p>
                                <p className="text-gray-400">Graduated 2021</p>
                            </div>
                            <div className="border-t border-white/10 pt-6">
                                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Learning</p>
                                <p className="text-light font-semibold mb-1">Front-End Development Course</p>
                                <p className="text-gray-400">Continuously improving</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
