/* Contact Page */
import "../styling/contact.css"
import ContactForm from "../components/ContactForm";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact(){
    return (
        <section className="contact-section">
            <div className="contact-header-section">
                <h3 className="contact-header-top">Feel Free to</h3>
                <h2 className="contact-header-bottom">Contact Me</h2>
            </div>

            <div className="contact-icons">
                <a href="mailto:samtusick@outlook.com" target="_blank" rel="noopener noreferrer" title = "Email">
                    <FaEnvelope size={32} />
                </a>
                <a href="https://linkedin.com/in/samuel-tusick" target="_blank" rel="noopener noreferrer" title = "Linkedin">
                    <FaLinkedin size={32} />
                </a>
                <a href="https://github.com/SamTusick" target="_blank" rel="noopener noreferrer" title = "GitHub">
                    <FaGithub size={32} />
                </a>
            </div>

            <ContactForm />

        </section>
    );
}