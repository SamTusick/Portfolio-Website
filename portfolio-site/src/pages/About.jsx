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
                        I build automation and AI systems that real teams use. As a Student Research Assistant at the
                        Dendritic AI & Data Science Institute, I built an LLM-powered course production pipeline,
                        automated daily Jira briefings into Microsoft Teams, and built 14 AI tutors for FGCU's
                        Engineering Learning Hub. I'm a Software Engineering student at Florida Gulf Coast University,
                        graduating May 2027, and I like to build from scratch so I understand the fundamentals.
                    </p>
                    <p>
                        I co-own architecture and technology decisions on MAIVA, an AI virtual patient training platform
                        on a serverless AWS backend. I also lead a 3-person team that was one of two winners of the FGCU
                        Payload Challenge, which funds a flight of our landing site detection payload on the Deeptech
                        Club's high-power rocket.
                    </p>
                    <p>
                        Outside of code I'm usually running, training jiu-jitsu, or exploring the outdoors. I'm a U.S.
                        citizen and eligible to pursue a security clearance.
                    </p>
                <div className="button-wrapper">
                    <a  href={`${base}Samuel_Tusick_Resume_2026.pdf`} className="resume-button"
                        download>
                    Download Resume
                    </a>
                    <a  href={`${base}Samuel_Tusick_CV_2026.pdf`} className="cv-button"
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
