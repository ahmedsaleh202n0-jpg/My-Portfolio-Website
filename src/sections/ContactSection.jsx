import { useState } from "react";
import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    Compass,
    Code,
    MapPin
} from "lucide-react";
const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "ahmedsaleh202n0@gmail.com",
            link: "mailto:ahmedsaleh202n0@gmail.com",
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+20 1122756018",
            link: "tel:+201122756018    ",
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Egypt",
            link: "#",
        },
        {
            icon: Compass,
            label: "LinkedIn",
            value: "@ahmed-saleh",
            link: "https://www.linkedin.com/in/ahmed-saleh-66796b36b/",
        },
        {
            icon: Code,
            label: "GitHub",
            value: "@ahmedsaleh",
            link: "https://github.com/ahmedsaleh202n0-jpg",
        },
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, you would send this to a server
        console.log("Form submitted:", formData);
        setSubmitted(true);
        setTimeout(() => {
            setFormData({ name: "", email: "", message: "" });
            setSubmitted(false);
        }, 3000);
    };

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
        <section id="contact" className="min-h-screen flex items-center py-20 px-6 bg-gradient-to-b from-dark to-dark/95">
            <div className="max-w-6xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Get in <span className="text-primary">Touch</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        I'm always open to new opportunities and interesting projects. Feel free to reach out!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-light mb-8">Contact Information</h3>

                        {contactInfo.map((info, index) => {
                            const Icon = info.icon;
                            return (
                                <motion.a
                                    key={index}
                                    variants={itemVariants}
                                    href={info.link}
                                    target={info.link.startsWith("http") ? "_blank" : "_self"}
                                    rel={info.link.startsWith("http") ? "noopener noreferrer" : ""}
                                    whileHover={{ x: 10 }}
                                    className="flex items-center gap-4 p-4 bg-glass backdrop-blur-md border border-white/10 rounded-xl hover:border-primary/50 transition-all duration-300 group"
                                >
                                    <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-lg group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="text-white" size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                                        <p className="text-light font-semibold group-hover:text-primary transition-colors">
                                            {info.value}
                                        </p>
                                    </div>
                                </motion.a>
                            );
                        })}
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-light">Send Me a Message</h3>

                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-light mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-glass backdrop-blur-md border border-white/10 rounded-lg text-light placeholder-gray-500 focus:border-primary focus:outline-none transition-all duration-300"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-light mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-glass backdrop-blur-md border border-white/10 rounded-lg text-light placeholder-gray-500 focus:border-primary focus:outline-none transition-all duration-300"
                                placeholder="your@email.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold text-light mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="w-full px-4 py-3 bg-glass backdrop-blur-md border border-white/10 rounded-lg text-light placeholder-gray-500 focus:border-primary focus:outline-none transition-all duration-300 resize-none"
                                placeholder="Your message..."
                            />
                        </div>

                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center font-semibold"
                            >
                                ✓ Message sent successfully! I'll get back to you soon.
                            </motion.div>
                        ) : (
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                            >
                                Send Message
                            </motion.button>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
