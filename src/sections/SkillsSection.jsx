import React from "react";
import { motion } from "framer-motion";
import {
    Code,
    Palette,
    Smartphone,
    GitBranch,
    Database,
    Zap,
} from "lucide-react";

const SkillsSection = () => {
    const skills = [
        {
            name: "HTML",
            icon: Code,
            color: "from-orange-500 to-red-500",
            description: "Semantic markup & accessibility",
        },
        {
            name: "CSS",
            icon: Palette,
            color: "from-blue-500 to-cyan-500",
            description: "Styling & animations",
        },
        {
            name: "JavaScript",
            icon: Zap,
            color: "from-yellow-500 to-orange-500",
            description: "ES6+ & DOM manipulation",
        },
        {
            name: "React",
            icon: Database,
            color: "from-cyan-500 to-blue-500",
            description: "Components & hooks",
        },
        {
            name: "Tailwind CSS",
            icon: Smartphone,
            color: "from-teal-500 to-cyan-500",
            description: "Utility-first framework",
        },
        {
            name: "Git & GitHub",
            icon: GitBranch,
            color: "from-purple-500 to-pink-500",
            description: "Version control",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="skills" className="min-h-screen flex items-center py-20 px-6 bg-dark">
            <div className="max-w-6xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-primary">My</span> Skills
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A comprehensive set of tools and technologies that I use to create exceptional web experiences
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />

                                <div className="relative bg-glass backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                                    <div className={`bg-gradient-to-br ${skill.color} p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="text-white" size={24} />
                                    </div>

                                    <h3 className="text-xl font-bold text-light mb-2">{skill.name}</h3>
                                    <p className="text-gray-400 text-sm">{skill.description}</p>

                                    {/* Animated progress bar */}
                                    <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "85%" }}
                                            transition={{ duration: 0.8, delay: 0.2 }}
                                            viewport={{ once: true }}
                                            className={`h-full bg-gradient-to-r ${skill.color}`}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Additional info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-glass backdrop-blur-md border border-white/10 rounded-xl p-8 text-center"
                >
                    <p className="text-gray-300 text-lg">
                        💡 I'm always eager to learn new technologies and expand my skill set. Currently exploring advanced React patterns and modern web development best practices.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;
