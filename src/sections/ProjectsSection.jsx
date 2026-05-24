import React from "react";
import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react"
function ProjectsSection() {
    const projects = [
        {
            id: 1,
            title: "E-Commerce Website",
            description: "A fully functional e-commerce platform with product filtering, shopping cart, and checkout functionality.",
            technologies: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
            image: "🛍️",
            liveLink: "https://my-shop-blush-nine.vercel.app/",
            githubLink: "https://github.com/ahmedsaleh202n0-jpg",
        },
        {
            id: 2,
            title: "Dashboard Admin Panel",
            description: "A responsive admin dashboard with charts, tables, and real-time data visualization features.",
            technologies: ["React", "Tailwind CSS", "Chart.js", "API Integration"],
            image: "📊",
            liveLink: "https://my-shop-blush-nine.vercel.app/",
            githubLink: "https://github.com/ahmedsaleh202n0-jpg",
        },
        {
            id: 3,
            title: "Weather App",
            description: "A weather application displaying current conditions and forecasts using real-time API data.",
            technologies: ["React", "JavaScript", "Weather API", "Responsive Design"],
            image: "🌤️",
            liveLink: "https://my-shop-blush-nine.vercel.app/",
            githubLink: "https://github.com/ahmedsaleh202n0-jpg",
        },
        {
            id: 4,
            title: "Task Manager",
            description: "A productivity app for managing daily tasks with local storage persistence and smooth animations.",
            technologies: ["React", "JavaScript", "LocalStorage", "Framer Motion"],
            image: "✅",
            liveLink: "https://my-shop-blush-nine.vercel.app/",
            githubLink: "https://github.com/ahmedsaleh202n0-jpg",
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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="projects" className="min-h-screen flex items-center py-20 px-6 bg-gradient-to-b from-dark/95 to-dark">
            <div className="max-w-6xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-primary">Featured</span> Projects
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Showcasing my best work and creative solutions built with modern technologies
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />

                            <div className="relative bg-glass backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                                {/* Project image/icon */}
                                <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                                    {project.image}
                                </div>

                                {/* Project content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-2xl font-bold text-light mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm mb-6 flex-1">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="mb-6">
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full border border-primary/30 hover:border-primary transition-colors"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-3 pt-4 border-t border-white/10">
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
                                        >
                                            <ExternalLink size={16} />
                                            Live Demo
                                        </a>
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-glass transition-all duration-300 transform hover:scale-105"
                                        >
                                            <Code size={16} />
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-400 text-lg mb-6">
                        Want to see more of my work?
                    </p>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
                    >
                        Visit My GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

export default ProjectsSection;
