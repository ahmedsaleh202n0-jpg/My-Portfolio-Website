import React from "react";
import { motion } from "framer-motion";
import { Code, Compass, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
    const socialLinks = [
        {
            icon: Code,
            href: "https://github.com",
            label: "GitHub",
        },
        {
            icon: Compass,
            href: "https://linkedin.com",
            label: "LinkedIn",
        },
        {
            icon: Mail,
            href: "mailto:ahmedsaleh@example.com",
            label: "Email",
        },
    ];

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
                {/* Main footer content */}
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h3 className="text-2xl font-bold text-primary">Ahmed Saleh</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            A passionate Front-End Developer creating beautiful and responsive web experiences.
                        </p>
                        <div className="flex gap-4 pt-2">
                            {socialLinks.map((link, index) => {
                                const Icon = link.icon;
                                return (
                                    <motion.a
                                        key={index}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-2 bg-glass border border-white/10 rounded-lg hover:border-primary/50 hover:bg-primary/20 transition-all duration-300"
                                        aria-label={link.label}
                                    >
                                        <Icon className="text-primary hover:text-secondary transition-colors" size={20} />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Quick links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h4 className="text-lg font-bold text-light">Quick Links</h4>
                        <ul className="space-y-2">
                            {["About", "Skills", "Projects", "Experience", "Contact"].map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 text-sm"
                                    >
                                        <span className="w-1 h-1 bg-primary rounded-full" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Resources */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h4 className="text-lg font-bold text-light">Resources</h4>
                        <ul className="space-y-2">
                            {[
                                { text: "GitHub", href: "https://github.com" },
                                { text: "LinkedIn", href: "https://linkedin.com" },
                                { text: "Download CV", href: "/cv.pdf" },
                            ].map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        target={link.href.startsWith("http") ? "_blank" : "_self"}
                                        rel={link.href.startsWith("http") ? "noopener noreferrer" : ""}
                                        className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 text-sm"
                                    >
                                        <span className="w-1 h-1 bg-secondary rounded-full" />
                                        {link.text}
                                        {link.href.startsWith("http") && <ExternalLink size={12} />}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 my-8" />

                {/* Bottom section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center justify-between gap-4"
                >
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        © {currentYear} Ahmed Saleh. All rights reserved.
                    </p>

                    <p className="text-gray-500 text-sm">
                        Crafted with <span className="text-red-500">❤️</span> using React, Tailwind CSS & Framer Motion
                    </p>
                </motion.div>

                {/* Scroll to top button */}
                <motion.a
                    href="#hero"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-lg hover:shadow-primary/50 transition-all duration-300 z-40"
                    aria-label="Scroll to top"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                        />
                    </svg>
                </motion.a>
            </div>
        </footer>
    );
};

export default Footer;
