// Portfolio Configuration
// Customize your portfolio information here

export const portfolioConfig = {
    // Personal Information
    personal: {
        name: "Ahmed Saleh",
        title: "Front-End Developer",
        bio: "Building modern, fast, and responsive web experiences with React and JavaScript. Passionate about clean code and user-centered design.",
        email: "ahmedsaleh@example.com",
        phone: "+20 123 456 7890",
        location: "Egypt",
    },

    // Social Links
    social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
    },

    // Navigation Links
    navLinks: [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Experience", href: "#experience" },
        { label: "Contact", href: "#contact" },
    ],

    // Skills
    skills: [
        {
            name: "HTML",
            description: "Semantic markup & accessibility",
            level: 85,
        },
        {
            name: "CSS",
            description: "Styling & animations",
            level: 85,
        },
        {
            name: "JavaScript",
            description: "ES6+ & DOM manipulation",
            level: 80,
        },
        {
            name: "React",
            description: "Components & hooks",
            level: 85,
        },
        {
            name: "Tailwind CSS",
            description: "Utility-first framework",
            level: 90,
        },
        {
            name: "Git & GitHub",
            description: "Version control",
            level: 80,
        },
    ],

    // Projects
    projects: [
        {
            id: 1,
            title: "E-Commerce Website",
            description:
                "A fully functional e-commerce platform with product filtering, shopping cart, and checkout functionality.",
            technologies: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
            image: "🛍️",
            liveLink: "#",
            githubLink: "#",
        },
        {
            id: 2,
            title: "Dashboard Admin Panel",
            description:
                "A responsive admin dashboard with charts, tables, and real-time data visualization features.",
            technologies: ["React", "Tailwind CSS", "Chart.js", "API Integration"],
            image: "📊",
            liveLink: "#",
            githubLink: "#",
        },
        {
            id: 3,
            title: "Weather App",
            description:
                "A weather application displaying current conditions and forecasts using real-time API data.",
            technologies: ["React", "JavaScript", "Weather API", "Responsive Design"],
            image: "🌤️",
            liveLink: "#",
            githubLink: "#",
        },
        {
            id: 4,
            title: "Task Manager",
            description:
                "A productivity app for managing daily tasks with local storage persistence and smooth animations.",
            technologies: ["React", "JavaScript", "LocalStorage", "Framer Motion"],
            image: "✅",
            liveLink: "#",
            githubLink: "#",
        },
    ],

    // Experience & Education
    experience: [
        {
            type: "education",
            title: "Diploma of Commerce",
            organization: "High School",
            date: "2021",
            description:
                "Completed my high school diploma with a focus on commerce and business studies.",
        },
        {
            type: "course",
            title: "Front-End Development Course",
            organization: "Self-Learning & Online Platform",
            date: "2023 - Present",
            description:
                "Intensive learning journey covering HTML, CSS, JavaScript, React, and modern web development practices.",
        },
    ],

    // Colors (Tailwind)
    colors: {
        primary: "#7F5AF0", // Purple
        secondary: "#2CB67D", // Green
        dark: "#16161a", // Dark background
        light: "#fffffe", // Light text
    },

    // Animation settings
    animation: {
        duration: 0.6, // Default animation duration
        staggerDelay: 0.2, // Stagger delay for multiple items
    },
};

export default portfolioConfig;
