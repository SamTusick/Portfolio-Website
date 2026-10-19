/* Skills Page */
import { iconMap } from "../data/icons";
import SkillSection from "../components/SkillsSection";
import "../styling/skills.css"
import pythonLogo from "../assets/python.png"
import JSLogo from "../assets/icons8-javascript-48.png"
import CppLogo from "../assets/icons8-c-48.png"
import CLlogo from "../assets/icons8-c-programming-48.png"
import VSCodeLogo from "../assets/icons8-vs-code-48.png"
import CLionLogo from "../assets/CLion.png"
import viteLogo from "../assets/icons8-vite-48.png"
import pygameLogo from "../assets/pygame_logo.png"
import gymnasiumLogo from "../assets/gymnasium-text.png"
import raspberryPiLogo from "../assets/rasbperry_pi.jpg"
import openRocketLogo from "../assets/open_rocket.jpg"
import supabase from "../assets/supabase.svg"
import { motion } from "framer-motion";

const languages = [
  { name: "C", src: CLlogo, color: "#283593"},
  { name: "C++", src: CppLogo, color: "#00599C" },
  { name: "Python", src: pythonLogo, color: "#3776AB" },
  { name: "JavaScript", src: JSLogo, color: "#F7DF1E" },
  { name: "SQL", ...iconMap["SQL"] },
];

const frameworks = [
  { name: "React", ...iconMap["React"] },
  { name: "Flask", ...iconMap["Flask"] },
  { name: "Selenium", ...iconMap["Selenium"]},
  { name: "Tailwind CSS", ...iconMap["Tailwind"] },
  { name: "Pygame", src: pygameLogo, color: "#4CAF50" },
  { name: "Gymnasium", src: gymnasiumLogo, color: "#0081A5" },
];

// Text-only chips (no icon or logo).
const aiAutomation = [
  { name: "LLM API integration" },
  { name: "Prompt and skill design" },
  { name: "Workflow automation" },
  { name: "Agentic workflow automation" },
  { name: "Orchestration of multi-service AI systems" },
  { name: "Neural networks and genetic algorithms" },
  { name: "RAG pipelines (chunking, embeddings, pgvector)" },
  { name: "Speech-to-text and text-to-speech integration" },
  { name: "Real-time LLM streaming over WebSockets" },
  { name: "Semantic segmentation" },
];

const tools = [
  { name: "AWS", ...iconMap["AWS"] },
  { name: "PostgreSQL", ...iconMap["Postgres"]},
  { name: "VS Code", src: VSCodeLogo, color: "#007ACC" },
  { name: "CLion", src: CLionLogo, color: "#0CA678" },
  { name: "GitHub", ...iconMap["GitHub"] },
  { name: "Git", ...iconMap["Git"] },
  { name: "GitHub Actions", ...iconMap["GitHub Actions"] },
  { name: "Vite", src: viteLogo, color: "#646CFF" },
  { name: "Supabase", src: supabase, color: "#34B27B" },
  { name: "Jira", ...iconMap["Jira"] },
  { name: "Microsoft Teams", ...iconMap["Microsoft Teams"] },
  { name: "Outlook", ...iconMap["Outlook"] },
  { name: "Raspberry Pi", src: raspberryPiLogo, color: "#C51A4A" },
  { name: "OpenRocket", src: openRocketLogo, color: "#E53935" },
];

export default function Skills() {
    return (
      <section className="skills-section">
            <motion.div
              className="skills-header-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.25, ease: "easeOut" }}
            >
                <h3 className="skills-header-top">Checkout My</h3>
                <h2 className="skills-header-bottom">Skills</h2>
            </motion.div>

          <motion.div
              className="skills-wrapper"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.25, ease: "easeOut" }}
            >
            <div className="skills-container">
                <SkillSection title="Languages" techStack={languages} />
                <SkillSection title="Frameworks & Libraries" techStack={frameworks} />
                <SkillSection title="AI & Automation" techStack={aiAutomation} />
                <SkillSection title="Tools & Platforms" techStack={tools} />
            </div>
          </motion.div>
      </section>
    );
  }
