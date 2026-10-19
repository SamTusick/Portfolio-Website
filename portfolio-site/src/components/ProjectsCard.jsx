import { iconMap } from "../data/icons";
import InProgressBadge from "./InProgressBadge";

export default function ProjectsCard({ image, imageAlt, title, description, note, repo, techStack, inProgress }) {
    return (
        <div className="projects-card">
            <img
                className="portfolio-image"
                src={image}
                alt={imageAlt || `${title} screenshot`}
                width={460}
                height={170}
                loading="lazy"
                decoding="async"
            />
            <div className="projects-card-heading">
                <h3>{title}</h3>
                {inProgress && <InProgressBadge />}
            </div>
            <p>{description}</p>
            {note && <p className="projects-card-note">{note}</p>}

            {techStack.length > 0 && (
                <div className="tech-stack">
                    {techStack.map((tech) => {
                        if (tech.type === "text") {
                            return (
                                <span className="tech-item tech-text" key={tech.name}>
                                    {tech.name}
                                </span>
                            );
                        }

                        if (tech.type === "image") {
                            return (
                                <span className="tech-item" key={tech.name} title={tech.name}>
                                    <img
                                        src={tech.src}
                                        alt={tech.name}
                                        className="tech-icon"
                                        width={24}
                                        height={24}
                                        style={{ width: "1.5rem", height: "1.5rem" }}
                                    />
                                </span>
                            );
                        }

                        const { icon: Icon, color } = iconMap[tech.name] || {};
                        return (
                            <span className="tech-item" key={tech.name} title={tech.name}>
                                {Icon ? <Icon className="tech-icon" title={tech.name} style={{ color }} /> : tech.name}
                            </span>
                        );
                    })}
                </div>
            )}

            {repo && (
                <a
                    href={repo}
                    className="repo-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Code
                </a>
            )}
        </div>
    );
}
