/* Projects Data */
import { iconMap } from "./icons"
import viteLogo from "../assets/icons8-vite-48.png"
import portfolioImage from "../assets/portfolio-image.png" 
import pythonLogo from "../assets/python.png"
import nhlLogo from "../assets/nhl-logo.png"

const data = {
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
    },

    nhlScraper: {
        title: "NHL Stat Web Scraper",
        description: "A Python tool that scrapes real-time NHL data by category using Selenium. Built for quick access to player stats, team standings, and more.",
        repo: "https://github.com/SamTusick/NHL-Web-Scraping",
        techStack: [
            { name: "Selenium", type: "icon" },
            { name: "Python", type: "image", src: pythonLogo },
        ],
        image: nhlLogo,
        wip: true
    }
};

export default data;