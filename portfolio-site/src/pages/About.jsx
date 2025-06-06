/* About Page */
import "../styling/about.css"
import profilePic from "../assets/profile-pic.jpg";
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
                        I'm a software engineering student at Florida Gulf Coast University, originally from 
                        Pittsburgh, Pennsylvania. I became interested in software development through a mix 
                        of curiosity and a desire to create things that actually help people. Over time, I 
                        found myself drawn to artificial intelligence and machine learning — not just for the 
                        innovation, but for the potential to solve real-world problems in smarter ways. My goal 
                        is to build technology that's practical, human-centered, and meaningful beyond the screen. 
                    </p>
                <div className="resume-button-wrapper">
                    <a href="/SamTusick_Resume_SoftwareEngineering.docx" className="resume-button" 
                    download>Download Resume
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