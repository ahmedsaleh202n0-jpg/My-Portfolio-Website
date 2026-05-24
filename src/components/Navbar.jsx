import React from "react";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-glass backdrop-blur-md shadow-lg border-b border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
                <a href="#hero" className="text-2xl font-bold text-primary tracking-tight">Ahmed Saleh</a>
                <ul className="hidden md:flex gap-8 text-light font-medium">
                    <li><a href="#about" className="hover:text-primary transition-colors duration-200">About</a></li>
                    <li><a href="#skills" className="hover:text-primary transition-colors duration-200">Skills</a></li>
                    <li><a href="#projects" className="hover:text-primary transition-colors duration-200">Projects</a></li>
                    <li><a href="#experience" className="hover:text-primary transition-colors duration-200">Experience</a></li>
                    <li><a href="#contact" className="hover:text-primary transition-colors duration-200">Contact</a></li>
                </ul>
                <div className="flex items-center gap-4">
                    {/* Dark mode toggle placeholder */}
                    <button className="w-10 h-10 rounded-full bg-glass flex items-center justify-center hover:bg-white/10 transition-colors duration-200">
                        <span className="sr-only">Toggle dark mode</span>
                        {/* Icon will be added later */}
                        <div className="w-5 h-5 bg-primary rounded-full" />
                    </button>
                    {/* Mobile menu placeholder */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
