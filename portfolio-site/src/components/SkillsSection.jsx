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
          // Text-only entries (no icon or logo) render as chips.
          if (!tech.icon && !tech.src) {
            return <span className="skill-chip" key={tech.name}>{tech.name}</span>;
          }

          const Icon = tech.icon;

          const handleMouseEnter = (e) => {
            e.currentTarget.style.transform = "scale(1.2)";
            e.currentTarget.style.filter = `drop-shadow(0 0 15px ${tech.color || "purple"})`;
          };

          const handleMouseLeave = (e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.filter = "none";
          };

          const floatAmount = Math.floor(Math.random() * 2) + 2; // Between 2-3
          const floatSpeed = Math.random() * 1 + 2.5; // Between 2.5-3.5 seconds

          return (
            <div className="skill-item" key={tech.name}>
              <motion.span
                  className="skill-icon"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    transition: "transform 0.2s ease, filter 0.2s ease"
                  }}
                  animate={{ y: [0, -floatAmount, 0] }} // Bobbing motion (disabled by MotionConfig when reduced motion is on)
                  transition={{ duration: floatSpeed, repeat: Infinity, ease: "easeInOut" }}
                >
                {Icon ? (
                  <Icon size={40} color={tech.color || "#FFFFFF"} aria-hidden="true" />
                ) : (
                  <img src={tech.src} alt="" width={48} height={48} />
                )}
              </motion.span>
              <span className="skill-label">{tech.name}</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
