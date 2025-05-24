import React from "react";
import { iconMap } from "../data/icons";

export default function ProjectCard({ title, period, role, tools, description}){
    return (
        <div className="research-card">
            <h4>{title}</h4>
            <p className="period">{period}</p>
            {role && <p><strong>Role:</strong> {role}</p>}
            {tools && <p><strong>Tools:</strong> {tools}</p>}
            <p>{description}</p>
        </div>
    );
}