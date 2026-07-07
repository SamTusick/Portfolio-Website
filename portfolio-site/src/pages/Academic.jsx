/* Academic Page */
import "../styling/academic.css"
import "../styling/research.css"
import { useState } from "react";
import ResearchCard from "../components/ResearchCard"
import { motion } from "framer-motion";

export default function Academic(){

    const [activeSection, setActiveSection] = useState("Education");
    return (
        <section className="academic-section">
           <motion.div
                className="academic-header-section"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.25, ease: "easeOut" }}
            >
                <h3 className="academic-header-top">My</h3>
                <h2 className="academic-header-bottom">Academic Experience</h2>
            </motion.div>

            <motion.div
                className="academic-toggle-tabs"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.25, ease: "easeOut" }}
            >
                {["Education", "Research", "Other Experiences"].map((section) => (
                    <button 
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={activeSection === section ? "active" : ""}
                    >
                        {section}
                    </button>
                ))}
            </motion.div>

            <div className="academic-content">
                {activeSection === "Education" && (
                    <motion.div
                        className="academic-block"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.25, ease: "easeOut" }}
                    >
                         <h3>
                            Florida Gulf Coast University <span style={{ fontWeight: "normal" }}><i>— Expected May 2027</i></span>
                        </h3>
                        <h4><i>B.S. in Software Engineering</i></h4>
                        <h5><strong>In-major GPA:</strong> <i>3.84</i></h5>
                        <p>
                        <strong>Relevant Coursework:</strong> Operating Systems, Software Testing, Intro to Data Engineering,
                                                                Requirements Engineering & Analysis, Intro to Cloud Computing, Software Engineering
                                                                Fundamentals, Computer Organization & Assembly Language Programming, Data Structures &
                                                                Algorithms, Computer Security, Calculus III, Differential Equations.
                        </p>

                        <hr className="academic-divider" />

                        <h4>Honors & Awards</h4>
                        <ul>
                            <li><strong>Dean’s List:</strong> 2023, 2024, 2025</li>
                            <li><strong>Ruth M. and Cleveland L. Campbell Engineering Scholarship Endowed Fund</strong></li>
                        </ul>


                        <hr className="academic-divider" />

                        <h4>Clubs & Activities</h4>
                        <ul>
                            <li>Member, Computer Science & Software Engineering Club</li>
                            <li>Participant, EagleHacks 2025</li>
                        </ul>

                    </motion.div>
                )}

                {activeSection === "Research" && (
                    
                    <div className="research-academic-block">
                        <ResearchCard
                            title = "Agentic AI Research & Development — Dendritic AI & DS Institute"
                            period = "Mar 2025 - Present"
                            role = " Research & Development Assistant"
                            tools = "Python, LLMs, Agent Architecture"
                            description = "As an Agentic AI Researcher and Developer at the Dendritic Institute, I contribute to the design and development of AI-driven educational tools, intelligent tutoring systems, and applied research initiatives. My work focuses on building agentic AI solutions, supporting large-scale AI education programs, and developing technologies that enhance learning, mentorship, and real-world training experiences." 
                        />

                        <ResearchCard
                            title="Router-Level Security Detection"
                            period = "Feb 2025 - Apr 2025"
                            role="Subteam Lead & Backend Developer"
                            tools="Python, Flask, SQLite, SSH"
                            description="For my Computer Security course we were tasked to contribute to an on-going research project from the 'Eagle CyberNest Lab'. I took on the role of team-leader, so I managed my group of 5 to help improve both the front-end and back-end of a 'Home Security System'. My main roles were to have communication and retrieve tasks from our mentor and then delegate within the group. I also worked on the back-end team, where I updated the system to be able to fully integrate 3 different routers. "
                        />

                        <ResearchCard
                            title = "Computional Usage in Different Fields of Study — Princeton University"
                            period = "Feb 2023 - Jun 2023"
                            role = "Research Assistant"
                            tools = "Qualitative Data Management, Research Organization"
                            description = "Worked alongside a team exploring how programming is applied in various academic and professional fields. I provided transcription support during interviews for over 300 professors and professionals to gain insight into how they integrated programming into their research and work. For each interview I was assigned I collected, organized, and ensured the data was properly documented and easily accessible for analysis." 
                        />

                        <ResearchCard
                            title = "Tech Intern — Ambridge Area High School"
                            period = "Jan 2023 - Jun 2023"
                            role = "Tech Intern"
                            tools = "Tech Support, User Assistance, Software/Network Troubleshooting"
                            description = "Interned with my high school’s tech department, where I gained hands-on experience supporting students and staff with technical issues. I assisted with troubleshooting network and account problems, resolving display errors, and handling general tech support requests. I also helped configure staff workstations and supported school events by setting up equipment like projectors and speakers." 
                        />

                    </div>
                )}

                {activeSection === "Other Experiences" && (
                    <motion.div
                        className="academic-block"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.25, ease: "easeOut" }}
                    >
                        <h3>Other Experience</h3>
                            <ul>
                                <li>
                                    <strong>FGCU AI Summer Academy 2026</strong> Supported the planning and delivery of the 2026 FGCU Summer AI Academy, helping provide workshops, trainings, webinars, and hands-on learning experiences to more than 500 participants. Contributed to the development of educational content and initiatives designed to expand AI literacy for students, educators, and community partners.
                                </li>
                                <li>
                                    <strong>Authentifi.ai</strong> Worked as a Platform Developer Intern at Authentifi AI, contributing to the development of AI-powered solutions and platform features. Collaborated on software development initiatives focused on improving functionality, scalability, and user experience within emerging AI applications.
                                </li>
                                <li>
                                    <strong>EagleHacks 2025:</strong> Participated in FGCU's 36-hour hackathon, where I collaborated with a team to develop a project based on real-world company challenges.
                                </li>
                                <li>
                                    <strong>AI Summer Academy 2025:</strong> Contributed to curriculum design for courses such as <i>AI Productivity Tools</i>. Assisted with presentation creation and data validation for AI-focused topics. Also served as a teaching assistant for the <i>AI Productivity Tools</i> and <i>AI Ethics</i> courses, supporting participants throughout the program.
                                </li>
                                <li>
                                    <strong>FGCU TechMatch:</strong> Networked with companies and shared research experience with professionals and recruiters at FGCU’s career fair.
                                </li>
                                <li>
                                    <strong>DENDRITIC Institute:</strong> Ongoing contributor to research in agentic AI systems under the DENDRITIC Institute.
                                </li>
                            </ul>
                    </motion.div>
                )}
            </div>
        </section>
    );
}