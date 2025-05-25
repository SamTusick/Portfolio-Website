/* Contact Page */
import "../styling/contact.css"
import ContactForm from "../components/ContactForm";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact(){
    return (

        <section className="contact-section">
            <motion.div
                className="contact-header-section"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.25, ease: "easeOut" }}
            >
                <h3 className="contact-header-top">Feel Free to</h3>
                <h2 className="contact-header-bottom">Contact Me</h2>
            </motion.div>

            <motion.div
                className="contact-icons"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.25, ease: "easeOut" }}
            >
                <a href="mailto:samtusick@outlook.com" target="_blank" rel="noopener noreferrer" title = "Email">
                    <FaEnvelope size={32} />
                </a>
                <a href="https://linkedin.com/in/samuel-tusick" target="_blank" rel="noopener noreferrer" title = "Linkedin">
                    <FaLinkedin size={32} />
                </a>
                <a href="https://github.com/SamTusick" target="_blank" rel="noopener noreferrer" title = "GitHub">
                    <FaGithub size={32} />
                </a>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <ContactForm />
            </motion.div>
        </section>
    );
}