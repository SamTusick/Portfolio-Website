/* Projects Page */
import "../styling/projects.css"
import ProjectsCard from "../components/ProjectsCard";
import data from "../data/projectsData";
import { motion } from "framer-motion"

const projects = Object.entries(data);

export default function Projects() {
  return(
    <section className="projects-section">
            <motion.div
              className="projects-header-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.25, ease: "easeOut" }}
            >
                <h3 className="projects-header-top">Explore My</h3>
                <h2 className="projects-header-bottom">Projects</h2>
            </motion.div>
            <motion.div
              className="projects-grid"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.25, ease: "easeOut" }}
            >
              {projects.map(([key, project]) => (
                <ProjectsCard key={key} {...project} />
              ))}
            </motion.div>

    </section>
  );
}
