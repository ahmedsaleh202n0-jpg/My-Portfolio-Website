import React from "react";
import { motion } from "framer-motion";
import { Calendar, Award } from "lucide-react";

const ExperienceSection = () => {
    const experiences = [
        {
            type: "education",
            title: "Diploma of Commerce",
            organization: "High School",
            date: "2021",
            description: "Completed my high school diploma with a focus on commerce and business studies.",
            icon: Award,
        },
        {
            type: "course",
            title: "Front-End Development Course",
            organization: "Self-Learning & Online Platform",
            date: "2023 - Present",
            description: "Intensive learning journey covering HTML, CSS, JavaScript, React, and modern web development practices.",
            icon: Calendar,
        },
    ];

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
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="experience" className="min-h-screen flex items-center py-20 px-6 bg-dark">
            <div className="max-w-4xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-primary">Experience</span> & Education
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        My educational background and professional development journey
                    </p>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary transform md:-translate-x-1/2" />

                    {/* Timeline items */}
                    <div className="space-y-12 md:space-y-16">
                        {experiences.map((exp, index) => {
                            const Icon = exp.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className={`relative flex ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                >
                                    {/* Dot on timeline */}
                                    <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 bg-dark border-4 border-primary rounded-full transform -translate-x-[14px] md:-translate-x-4 md:translate-y-0 flex items-center justify-center z-10">
                                        <Icon className="text-primary" size={16} />
                                    </div>

                                    {/* Content card */}
                                    <div
                                        className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? "md:pr-12" : "md:pl-12"
                                            }`}
                                    >
                                        <motion.div
                                            whileHover={{ y: -5 }}
                                            className="bg-glass backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                                        >
                                            <div className="flex items-start justify-between mb-2">
                                                <h3 className="text-xl font-bold text-light">
                                                    {exp.title}
                                                </h3>
                                                <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full font-semibold">
                                                    {exp.date}
                                                </span>
                                            </div>

                                            <p className="text-primary font-semibold mb-2">
                                                {exp.organization}
                                            </p>

                                            <p className="text-gray-400">
                                                {exp.description}
                                            </p>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Skills highlight */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-20 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl p-8"
                >
                    <h3 className="text-2xl font-bold text-light mb-4">What I've Learned</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Building responsive, modern web applications with React",
                            "Writing clean, maintainable JavaScript code",
                            "Creating beautiful UI designs with Tailwind CSS",
                            "Implementing smooth animations and interactions",
                            "Version control with Git and GitHub",
                            "Problem-solving and debugging techniques",
                        ].map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-3 text-gray-300"
                            >
                                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ExperienceSection;
