import { FaReact, FaPython, FaGithub } from 'react-icons/fa';
import { SiVite, SiFlask, SiMongodb, SiGithubactions, SiSelenium } from 'react-icons/si';

export const iconMap = {
  React: {
    icon: FaReact,
    color: "#61DAFB"
  },
  
  Python: FaPython,

  Flask: SiFlask,

  MongoDB: SiMongodb,

  Vite: { 
    icon: SiVite,
    color: "#646CFF"
  },

  GitHub: FaGithub,

  "GitHub Actions": {
    icon: SiGithubactions,
    color: "#2088FF"
  },

  Selenium: {
    icon: SiSelenium,
    color: "#43B02A"
  }
};