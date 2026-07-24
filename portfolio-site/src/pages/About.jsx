/* About Page */
import "../styling/about.css"
import profilePic from "../assets/GSM_pic.JPG";
import { motion } from "framer-motion";


export default function About(){
    return (
        <section className="about-section">
            <motion.div
              className="about-header-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.25, ease: "easeOut" }}
            >
                <h3 className="about-header-top">Get to Know More</h3>
                <h2 className="about-header-bottom">About Me</h2>
            </motion.div>
            <motion.div
                className="about-content-container"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.25, ease: "easeOut" }}
            >
                <div className="about-text">
                    <p>
                       I'm a Software Engineering student at Florida Gulf Coast University, originally from Pittsburgh, Pennsylvania, 
                        with interests in artificial intelligence, backend development, and data-driven systems. As a Student Research
                        Assistant at the Dendritic Institute, I help build and maintain 14+ custom AI tutors used within the Engineering 
                        Learning Hub, and support AI education initiatives — including the 2026 FGCU Summer AI Academy, which reached over 500
                        participants through workshops, trainings, and more than 150 hours of instructional content. I'm also contributing as a 
                        developer on MAIVA, a fellow Dendritic Institute researcher's master's thesis project — an AI virtual patient training 
                        platform that gives graduate students realistic, LLM-driven practice for mental health assessments. I enjoy building 
                        practical software through web development, databases, automation, and cloud technologies, with a focus on creating impactful,
                        scalable systems. I'm always looking for opportunities to learn, collaborate, and contribute to projects at the intersection of 
                        software engineering and artificial intelligence.
                    </p>
                <div className="button-wrapper">
                    <a  href="/Portfolio-Website/Samuel_Tusick_Resume_2026.pdf" className="resume-button" 
                        download>
                    Download Resume
                    </a>
                    <a  href="/Portfolio-Website/SamTusick_Software_Engineering_CV_2026.pdf" className="cv-button" 
                        download>
                    Download CV
                    </a>
                </div>
                </div>
                <div className="about-image">
                    <img src={profilePic} alt="Picture of Samuel Tusick" />
                </div>
            </motion.div>
        </section>
    );
}
