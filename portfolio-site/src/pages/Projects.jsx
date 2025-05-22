/* Projects Page */
import "../styling/projects.css"
import ProjectsCard from "../components/ProjectsCard";
import data from "../data/projectsData";


export default function Projects() {
  const projects = Object.values(data);

  return(
    <section className="projects-section">
            <div className="projects-header-section">
                <h3 className="projects-header-top">Explore My</h3>
                <h2 className="projects-header-bottom">Projects</h2>
            </div>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <ProjectsCard key={index} {...project} />
              ))}
            </div>
    </section>
  );
  }
  