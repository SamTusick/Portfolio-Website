/* Projects Data */
import { iconMap } from "./icons"
import viteLogo from "../assets/icons8-vite-48.png"
import portfolioImage from "../assets/portfolio-image.png" 
import pythonLogo from "../assets/python.png"
import cppLogo from "../assets/icons8-c-48.png"
import statLogo from "../assets/stat-thumbnail.png"
import schoolImg from "../assets/school_management_example.jpg"

const data = {
        nhlScraper: {
        title: "NHL Stat Web Scraper",
        description: "A Python + React tool that scrapes real-time NHL data by category using Selenium. Built for quick access to different player stat leaders.",
        repo: "https://github.com/SamTusick/NHL-Web-Scraping",
        techStack: [
            { name: "Selenium", type: "icon" },
            { name: "Python", type: "image", src: pythonLogo },
            { name: "Flask", type: "icon" },
        ],
        image: statLogo,
        wip: false

    },
    
        schoolManagement: {
        title: "School Management System",
        description: "A simple C++ & SQLite3-based task manager that lets you keep track of assignments, quizzes, and events. This project demonstrates database integration with sqlite3 for persistence, along with a command-line interface for task management.",
        repo: "https://github.com/SamTusick/School-Management-System",
        techStack: [
            { name: "C++", type: "image", src: cppLogo },
            { name: "SQLite", type: "icon"},
        ],
        image: schoolImg,
        wip: false
    },

    portfolioWebsite: {
        title: "Portfolio Website",
        description: "A modern, responsive portfolio website built with React and Vite to showcase my projects, skills, and academic experience. Designed for clarity, performance, and personalization.",
        repo: "https://github.com/SamTusick/Portfolio-Website",
        techStack: [
            { name: "React", type: "icon" },
            { name: "Vite", type: "image", src: viteLogo },
            { name: "GitHub Actions", type: "icon" }
        ],
        image: portfolioImage,
        wip: false
    }
};

export default data;