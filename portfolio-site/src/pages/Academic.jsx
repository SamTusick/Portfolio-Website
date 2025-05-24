/* Academic Page */
import "../styling/academic.css"
import "../styling/research.css"
import { useState } from "react";
import ResearchCard from "../components/ResearchCard"

export default function Academic(){

    const [activeSection, setActiveSection] = useState("Education");
    return (
        <section className="academic-section">
            <div className="academic-header-section">
                <h3 className="academic-header-top">My</h3>
                <h2 className="academic-header-bottom">Academic Experience</h2>
            </div>

            <div className="academic-toggle-tabs">
                {["Education", "Research", "Highlights"].map((section) => (
                    <button 
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={activeSection === section ? "active" : ""}
                    >
                        {section}
                    </button>
                ))}
            </div>

            <div className="academic-content">
                {activeSection === "Education" && (
                   <div className="academic-block">
                         <h3>
                            Florida Gulf Coast University <span style={{ fontWeight: "normal" }}><i>— Expected May 2027</i></span>
                        </h3>
                        <h4><i>B.S. in Software Engineering</i></h4>
                        <h5><strong>Cumulative GPA:</strong> <i>3.44</i></h5>
                        <p>
                        <strong>Relevant Coursework:</strong> Data Structures & Algorithms, Computer Security,
                            Software Engineering Fundamentals <i>(currently in progress)</i>
                        </p>

                        <hr className="academic-divider" />

                        <h4>Clubs & Activities</h4>
                        <ul>
                            <li>Member, Computer Science & Software Engineering Club</li>
                            <li>Participant, EagleHacks 2025</li>
                        </ul>

                        <hr className="academic-divider" />

                        <h4>Honors & Awards</h4>
                        <ul>
                            <li><strong>Dean’s List:</strong> Fall 2023, Spring 2024</li>
                            <li>Honors College Student</li>
                        </ul>
                    </div>
                )}

                {activeSection === "Research" && (
                    <div className="research-academic-block">
                        <ResearchCard
                            title = "Agentic AI Research — Dendritic Institute"
                            period = "Mar 2025 - Present"
                            role = " Research Assistant"
                            tools = "Python, LLMs, Agent Architecture"
                            description = "Working with a small team to learn and develop AI agents. Researching the types of AI agents, how they work, the architecture of each, and when to use each type." 
                        />

                        <ResearchCard
                            title="Router-Level Security Detection"
                            period = "Feb 2025 - Apr 2025"
                            role="Backend Developer"
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

                {activeSection === "Highlights" && (
                    <div className="academic-block">
                        <h1>Add Highlights Here</h1>
                    </div>
                )}
            </div>
        </section>
    );
}