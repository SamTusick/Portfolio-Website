/* Projects Data */
import { iconMap } from "./icons"
import viteLogo from "../assets/icons8-vite-48.png"
import portfolioImage from "../assets/portfolio-image.png" 

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
        image: portfolioImage

    }
};

export default data;