export default function SkillSection({ title, techStack }) {
  return (
    <div className="skill-section">
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

          return (
            <span
              className="skill-icon"
              key={tech.name}
              title={tech.name}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                transition: "transform 0.2s ease, filter 0.2s ease"
              }}
            >
              {Icon ? (
                <Icon size={40} color={tech.color || "#FFFFFF"} />
              ) : (
                <img src={tech.src} alt={tech.name} />
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
}
