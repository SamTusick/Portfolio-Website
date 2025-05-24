/* Skills Page */
import { iconMap } from "../data/icons";
import SkillSection from "../components/SkillsSection";
import "../styling/skills.css"
import pythonLogo from "../assets/python.png"
import JSLogo from "../assets/icons8-javascript-48.png"
import CppLogo from "../assets/icons8-c-48.png"
import VSCodeLogo from "../assets/icons8-vs-code-48.png"
import CLionLogo from "../assets/CLion.png"

const languages = [
  { name: "Python", src: pythonLogo, color: "#3776AB" },
  { name: "JavaScript", src: JSLogo, color: "#F7DF1E" },
  { name: "C++", src: CppLogo, color: "#00599C" },
  { name: "HTML", ...iconMap["HTML"] },
  { name: "CSS", ...iconMap["CSS"] },
];

const frameworks = [
  { name: "React", ...iconMap["React"] },
  { name: "Flask", ...iconMap["Flask"] },
  { name: "Node.js", ...iconMap["Node"] },
  { name: "Selenium", ...iconMap["Selenium"]}
];

const tools = [
  { name: "VS Code", src: VSCodeLogo, color: "#007ACC" },
  { name: "CLIon", src: CLionLogo, color: "#0CA678" },
  { name: "GitHub", ...iconMap["GitHub"] },
  { name: "Git", ...iconMap["Git"] },
];

export default function Skills() {
    return (
      <section className="skills-section">
            <div className="skills-header-section">
                <h3 className="skills-header-top">Checkout My</h3>
                <h2 className="skills-header-bottom">Skills</h2>
            </div>

          <div className="skills-wrapper">
            <div className="skills-container">
                <SkillSection title="Languages" techStack={languages} />
                <SkillSection title="Frameworks & Libraries" techStack={frameworks} />
                <SkillSection title="Tools & Platforms" techStack={tools} />
            </div>
          </div>
      </section>
    );
  }