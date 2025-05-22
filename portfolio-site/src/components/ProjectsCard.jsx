import React from "react";
import { iconMap } from "../data/icons";

export default function ProjectsCard({image, title, description, repo, techStack}) {
    return (
        <div className="projects-card">
            <img className="portfolio-image" src={image} alt={`${title} screenshot`} />
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="tech-stack">
                {techStack.map((tech) => {
                    if (tech.type === "image") {
                        return (
                            <span className="tech-item" key={tech.name} title={tech.name}>
                                <img
                                    src={tech.src}
                                    alt={tech.name}
                                    className="tech-icon"
                                    key={tech.name}
                                    title={tech.name}
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