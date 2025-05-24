/* Academic Page */
import "../styling/academic.css"
import { useState } from "react";

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
                        <h5>Cumulative GPA: <i>3.44</i></h5>
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
                            <li>Dean’s List: Fall 2023, Spring 2024</li>
                            <li>Honors College Student</li>
                        </ul>
                    </div>
                )}

                {activeSection === "Research" && (
                    <div className="academic-block">
                        <h1>Add Research Here</h1>
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