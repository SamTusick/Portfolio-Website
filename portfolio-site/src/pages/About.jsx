/* About Page */
import "../styling/about.css"
import profilePic from "../assets/about-gsm.webp";
import { motion } from "framer-motion";

const base = import.meta.env.BASE_URL;

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
                        I'm an AI and automation engineer and a Software Engineering student at Florida Gulf Coast University,
                        graduating May 2027, originally from Pittsburgh, Pennsylvania. I build automation and AI systems that
                        real teams use. As a Student Research Assistant at the Dendritic AI & Data Science Institute, I built 
                        an LLM-powered course production pipeline, automated daily Jira briefings into Microsoft Teams, and built 
                        14 curriculum-specific AI tutors for the Engineering Learning Hub. I also coordinated logistics and content
                        delivery for the 2026 FGCU Summer AI Academy, which had over 500 participants and more than 150 instructional hours.
                    </p>
                    <p>
                        I co-own architecture, data modeling, and technology decisions on MAIVA, an LLM-driven virtual patient
                        platform where students practice clinical interviews with AI-simulated psychiatric patients by chat,
                        voice, or 3D avatar, built on a serverless AWS backend. I also lead a 4-person team that was one of two
                        winners of the FGCU Payload Challenge, which funds a flight of our landing site detection payload on the
                        Deeptech Club's high-power rocket.
                    </p>
                    <p>
                        I enjoy building practical software through web development, databases, automation, and cloud
                        technologies, with a focus on impactful, scalable systems. Outside of code I'm usually running,
                        training jiu-jitsu, or exploring the outdoors. I'm a U.S. citizen and eligible to pursue a security
                        clearance.
                    </p>
                <div className="button-wrapper">
                    <a  href={`${base}Samuel_Tusick_Resume.pdf`} className="resume-button"
                        download>
                    Download Resume
                    </a>
                    <a  href={`${base}Samuel_Tusick_CV.pdf`} className="cv-button"
                        download>
                    Download CV
                    </a>
                </div>
                </div>
                <div className="about-image">
                    <img src={profilePic} alt="Picture of Samuel Tusick" width={800} height={600} loading="lazy" />
                </div>
            </motion.div>
        </section>
    );
}
