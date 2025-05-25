import React from "react";
import { iconMap } from "../data/icons";
import { motion } from "framer-motion";

export default function ProjectCard({ title, period, role, tools, description}){
    return (
        <motion.div
            className="research-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.25, ease: "easeOut" }}
        >
            <h4>{title}</h4>
            <p className="period">{period}</p>
            {role && <p><strong>Role:</strong> {role}</p>}
            {tools && <p><strong>Tools:</strong> {tools}</p>}
            <p>{description}</p>
        </motion.div>
    );
}