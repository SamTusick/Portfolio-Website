import { motion } from "framer-motion";

export default function ResearchCard({ title, period, role, tools, description, bullets }){
    return (
        <motion.div
            className="research-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.25, ease: "easeOut" }}
        >
            <h4>{title}</h4>
            {period && <p className="period">{period}</p>}
            {role && <p><strong>Role:</strong> {role}</p>}
            {tools && <p><strong>Tools:</strong> {tools}</p>}
            {description && <p>{description}</p>}
            {bullets && (
                <ul>
                    {bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                    ))}
                </ul>
            )}
        </motion.div>
    );
}
