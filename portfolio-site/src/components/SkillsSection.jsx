/* Skills Section Component */
import { motion } from "framer-motion";

export default function SkillSection({ title, techStack }) {
  return (
    <motion.div
              className="skill-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.25, ease: "easeOut" }}
            >
      <h3 className="skill-title">{title}</h3>
      <div className="skill-icons">
        {techStack.map((tech) => {
          const Icon = tech.icon;

          const handleMouseEnter = (e) => {
            e.currentTarget.style.transform = "scale(1.2)";
            e.currentTarget.style.filter = `drop-shadow(0 0 15px ${tech.color || "purple"})`;
          };

          const handleMouseLeave = (e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.filter = "none";
          };

          const floatAmount = Math.floor(Math.random() * 2) + 2; // Between 2–3
          const floatSpeed = Math.random() * 1 + 2.5; // Between 2.5–3.5 seconds

          return (
            <motion.span
                className="skill-icon"
                key={tech.name}
                title={tech.name}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  transition: "transform 0.2s ease, filter 0.2s ease"
                }}
                animate={{ y: [0, -floatAmount, 0] }} // Bobbing motion
                transition={{ duration: floatSpeed, repeat: Infinity, ease: "easeInOut" }}
              >
              {Icon ? (
                <Icon size={40} color={tech.color || "#FFFFFF"} />
              ) : (
                <img src={tech.src} alt={tech.name} />
              )}
            </motion.span>
          );
        })}
      </div>
    </motion.div>
  );
}
