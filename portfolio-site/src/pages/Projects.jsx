/* Projects Page */
import "../styling/projects.css"
import { useState } from "react";
import ProjectsCard from "../components/ProjectsCard";
import data from "../data/projectsData";
import { motion } from "framer-motion"

const allProjects = Object.entries(data);
const featured = allProjects.filter(([, project]) => project.featured);
const more = allProjects.filter(([, project]) => !project.featured);

export default function Projects() {
  const [showMore, setShowMore] = useState(false);

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
              {featured.map(([key, project]) => (
                <ProjectsCard key={key} {...project} />
              ))}
            </motion.div>

            <div className="more-projects">
              <h3 className="more-projects-heading">More Projects</h3>
              <button
                type="button"
                className="more-projects-toggle"
                aria-expanded={showMore}
                aria-controls="more-projects-grid"
                onClick={() => setShowMore((prev) => !prev)}
              >
                {showMore ? "Hide" : `Show ${more.length} more`}
              </button>
              {showMore && (
                <div className="projects-grid" id="more-projects-grid">
                  {more.map(([key, project]) => (
                    <ProjectsCard key={key} {...project} />
                  ))}
                </div>
              )}
            </div>
    </section>
  );
}
