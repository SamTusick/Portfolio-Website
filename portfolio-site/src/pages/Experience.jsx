/* Experience Page */
import "../styling/experience.css"
import "../styling/research.css"
import { useState } from "react";
import ResearchCard from "../components/ResearchCard"
import { motion } from "framer-motion";

export default function Experience(){

    const [activeSection, setActiveSection] = useState("Education");
    return (
        <section className="experience-section">
           <motion.div
                className="experience-header-section"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.25, ease: "easeOut" }}
            >
                <h3 className="experience-header-top">My</h3>
                <h2 className="experience-header-bottom">Experience</h2>
            </motion.div>

            <motion.div
                className="experience-toggle-tabs"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.25, ease: "easeOut" }}
            >
                {["Education", "Research", "Other Experiences"].map((section) => (
                    <button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={activeSection === section ? "active" : ""}
                    aria-pressed={activeSection === section}
                    >
                        {section}
                    </button>
                ))}
            </motion.div>

            <div className="experience-content">
                {activeSection === "Education" && (
                    <motion.div
                        className="experience-block"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.25, ease: "easeOut" }}
                    >
                         <h3>
                            Florida Gulf Coast University <span style={{ fontWeight: "normal" }}><i>(Expected May 2027)</i></span>
                        </h3>
                        <h4><i>B.S. in Software Engineering</i></h4>
                        <h5><strong>In-major GPA:</strong> <i>3.83</i></h5>
                        <p>
                        <strong>Relevant Coursework:</strong> Machine Learning (in progress, Fall 2026), AI Agent Studio (in progress, Fall 2026),
                                                                Software Architecture & Design (in progress, Fall 2026), Intro to Data Engineering,
                                                                Data Structures & Algorithms, Cloud Computing, Software Engineering Fundamentals,
                                                                Requirements Engineering & Analysis.
                        </p>

                        <hr className="experience-divider" />

                        <h4>Honors & Awards</h4>
                        <ul>
                            <li><strong>Dean’s List:</strong> 2023, 2024, 2025</li>
                            <li><strong>Ruth M. and Cleveland L. Campbell Engineering Scholarship Endowed Fund</strong></li>
                            <li><strong>Kunkle Family Scholarship Endowed Fund</strong></li>
                        </ul>


                        <hr className="experience-divider" />

                        <h4>Clubs & Activities</h4>
                        <ul>
                            <li><strong>FGCU Payload Challenge winner:</strong> Team lead, one of two teams selected, with the Deeptech Club</li>
                            <li><strong>2026 FGCU AI Day Panelist</strong> (Mar 2026)</li>
                            <li>Payload Team Lead, <strong>FGCU Deeptech Club</strong> (June 2026 to Present)</li>
                            <li>Member, <strong>Computer Science & Software Engineering Club</strong> (Aug 2024 to Present)</li>
                            <li>Team Lead, <strong>Switch4Good Database System</strong> (Jan 2026 to May 2026)</li>
                            <li>Team Lead, <strong>Pinterest Testing Suites</strong> (Mar 2026 to May 2026)</li>
                            <li>Subteam Lead, <strong>Eagle CyberNest Lab</strong>, 5-member team (Feb 2025 to Apr 2025)</li>
                            <li>Participant, <strong>EagleHacks 2025</strong></li>
                            <li>Member, <strong>FGCU Run Club</strong></li>
                            <li><strong>Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate</strong></li>
                            <li>Member, <strong>TheiiiMovement</strong></li>
                            <li>Student, <strong>Gracie Barra BJJ</strong></li>
                        </ul>

                    </motion.div>
                )}

                {activeSection === "Research" && (

                    <div className="research-experience-block">
                        <ResearchCard
                            title="Agentic AI Research & Development, Dendritic AI & Data Science Institute"
                            period="Mar 2025 to Present"
                            role="Student Research Assistant, Research & Development"
                            tools="Python, LLMs, Agent Architecture, workflow automation, Jira, Microsoft Teams"
                            description="I contribute to the design and development of AI-driven educational tools, intelligent tutoring systems, and applied research initiatives. My work focuses on building agentic AI solutions, supporting large-scale AI education programs, and developing technologies that enhance learning, mentorship, and real-world training experiences."
                            bullets={[
                                "Built an LLM-powered pipeline for AI avatar course production (AIVA). One skill turns professor PDFs and slide decks into narration scripts, and a second generates the avatar video and a matching slide deck from each script and institute standards. Estimated 45% efficiency gain, used by the dev and infrastructure teams.",
                                "Built a reusable skill that generates the institute handbook, documenting every team workflow. Used institute-wide.",
                                "Built a scheduled workflow that pulls Jira data at 9 AM and posts a daily briefing card to a Microsoft Teams channel. Used institute-wide.",
                                "Built event-driven workflows that notify Teams channels when files land in monitored folders. Used by the media and infrastructure teams.",
                                "Coordinated logistics and content delivery for the 2026 FGCU Summer AI Academy (500+ participants, 150+ instructional hours), and built 14 curriculum-specific AI tutors for the Engineering Learning Hub, grounded in curated course materials.",
                                "Evaluate emerging agentic AI frameworks for institute use.",
                            ]}
                        />

                        <ResearchCard
                            title="Real-Time Landing Site Detection with ML, FGCU Deeptech Club"
                            period="June 2026 to Present"
                            role="Payload Team Lead (4-person team)"
                            tools="Raspberry Pi, segmentation model, IMU, barometer, GPS, OpenRocket"
                            bullets={[
                                "Selected as one of two winners of the FGCU Payload Challenge, with funding and a flight on the Deeptech Club's high-power rocket.",
                                "Building a camera-only payload that runs a segmentation model live on a Raspberry Pi to label terrain safe or unsafe, tested during powered ascent rather than parachute descent, against flame, vibration, spin, and motion blur, with every frame and sensor reading saved for analysis.",
                                "Done so far: OpenRocket flight simulation and a pretrained-model proof of concept.",
                                "Targets, not results: at least 2 predictions per second and 80% pixel accuracy, reported either way.",
                            ]}
                        />

                        <ResearchCard
                            title="Router-Level Security Detection"
                            period="Feb 2025 to Apr 2025"
                            role="Subteam Lead & Backend Developer"
                            tools="Python, Flask, SQLite, SSH"
                            description="For my Computer Security course we contributed to an on-going research project from the Eagle CyberNest Lab. I led backend architecture decisions and task coordination for the 5-member team, delivering a home-network security platform on schedule. I built Flask backend services with SSH and SQLite for real-time, centralized monitoring across three router platforms, and tested and deployed the router-communication scripts."
                        />

                    </div>
                )}

                {activeSection === "Other Experiences" && (
                    <motion.div
                        className="experience-block"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.25, ease: "easeOut" }}
                    >
                        <h3>Other Experience</h3>
                            <ul>
                                <li>
                                    <strong>2026 FGCU AI Day Panelist.</strong> Presented at FGCU's inaugural AI Day on the “AI in University Operations” panel, showcasing Dendritic's work on the AI tutors developed for the Engineering Learning Hub, which are grounded in curated course materials. Shared insights on building instructor-guided tutoring systems designed to provide 24/7 academic support and expand access to personalized learning resources.
                                </li>
                                <li>
                                    <strong>2026 FGCU Summer AI Academy.</strong> Coordinated logistics and content delivery for the 2026 FGCU Summer AI Academy, providing workshops, trainings, webinars, and hands-on learning experiences to more than 500 participants across more than 150 instructional hours. Contributed to educational content and initiatives designed to expand AI literacy for students, educators, and community partners.
                                </li>
                                <li>
                                    <strong>Authentifi.ai, AI Platform Developer Intern.</strong> Worked as an AI Platform Developer Intern at Authentifi AI, contributing to the development of AI-powered solutions and platform features. Collaborated on software development initiatives focused on improving functionality, scalability, and user experience within emerging AI applications.
                                </li>
                                <li>
                                    <strong>EagleHacks 2025.</strong> Participated in FGCU's 36-hour hackathon, collaborated with a team to develop a project based on real-world company challenges.
                                </li>
                                <li>
                                    <strong>AI Summer Academy 2025.</strong> Contributed to curriculum design for courses such as <i>AI Productivity Tools</i>. Assisted with presentation creation and data validation for AI-focused topics. Also served as a teaching assistant for the <i>AI Productivity Tools</i> and <i>AI Ethics</i> courses, supporting participants throughout the program.
                                </li>
                                <li>
                                    <strong>FGCU TechMatch.</strong> Networked with companies and shared research experience with professionals and recruiters at FGCU’s career fair.
                                </li>
                                <li>
                                    <strong>Research Assistant, Princeton University (Feb 2023 to Jun 2023).</strong> Worked alongside a team exploring how programming is applied in various academic and professional fields (<i>Computational Usage in Different Fields of Study</i>). Provided transcription support during interviews for over 300 professors and professionals to gain insight into how they integrated programming into their research and work, and collected, organized, and documented the data for analysis.
                                </li>
                                <li>
                                    <strong>Tech Intern, Ambridge Area High School (Jan 2023 to Jun 2023).</strong> Interned with my high school's tech department, gaining hands-on experience supporting students and staff with technical issues. Assisted with troubleshooting network and account problems, resolving display errors, and handling general tech support requests. Also helped configure staff workstations and supported school events by setting up equipment like projectors and speakers.
                                </li>
                            </ul>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
