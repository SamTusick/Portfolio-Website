import { FaReact, FaGithub, FaHtml5, FaCss3Alt, FaNode, FaGitAlt, FaJava, FaAws } from 'react-icons/fa';
import { SiFlask, SiMongodb, SiGithubactions, SiSelenium, SiSqlite, SiTypescript, SiTailwindcss, SiJira } from 'react-icons/si';
import { BiLogoPostgresql, BiLogoMicrosoftTeams } from "react-icons/bi";
import { PiFileSqlDuotone, PiMicrosoftOutlookLogoThin } from "react-icons/pi";

export const iconMap = {
  React: {
    icon: FaReact,
    color: "#61DAFB"
  },

  Jira: {
    icon: SiJira,
    color: "#0052CC"
  },

  "Microsoft Teams": {
    icon: BiLogoMicrosoftTeams,
    color: "#505AC9"
  },

  Flask: {
    icon: SiFlask,
    color: "#FFFFFF"
  },

  MongoDB: SiMongodb,

  GitHub: {
    icon: FaGithub,
    color: "#FFFFFF"
  },

  "GitHub Actions": {
    icon: SiGithubactions,
    color: "#2088FF"
  },

  Git: {
    icon: FaGitAlt,
    color: "#F05032"
  },

  Selenium: {
    icon: SiSelenium,
    color: "#43B02A"
  },

  HTML: {
    icon: FaHtml5,
    color: "#E34F26"
  },

  CSS: {
    icon: FaCss3Alt,
    color: "#1572B6"
  },

  Node: {
    icon: FaNode,
    color: "#339933"
  },

  SQLite: {
    icon: SiSqlite,
    color: "#003B57"
  },

  Java: {
    icon: FaJava,
    color: "#ED8B00"
  },

  Postgres: {
    icon: BiLogoPostgresql,
    color: "#336791"
  },
   
  SQL: {
    icon: PiFileSqlDuotone,
    color: "#00A4EF"
  },

  AWS: {
    icon: FaAws,
    color: "#FF9900"
  },

  Outlook: {
    icon: PiMicrosoftOutlookLogoThin,
    color: "#00A4EF"
  }, 

  TypeScript: {
    icon: SiTypescript,
    color: "#3178C6"
  },
  
  Tailwind: {
    icon: SiTailwindcss,
    color: "#38BDF8"
  }
};