/* Projects Data */
import { iconMap } from "./icons"
import viteLogo from "../assets/icons8-vite-48.png"
import portfolioImage from "../assets/portfolio-image.png" 
import pythonLogo from "../assets/python.png"
import cppLogo from "../assets/icons8-c-48.png"
import statLogo from "../assets/stat-thumbnail.png"
import schoolImg from "../assets/school_management_example.jpg"
import asmLogo from "../assets/assembly.jpg"
import asmPic from "../assets/asm-pic.jpeg"
import routerPic from "../assets/router_pic.png"
import pinterest from "../assets/pinterest.png"
import switch4GoodPic from "../assets/dbImage.png"
import aiTutor from "../assets/aitutor.png"

const data = {
        S4Good: {
        title: "Switch4Good Impact Tracking Database",
        description: "Led a team developing a database system for Switch4Good to support impact tracking across more than 100 universities and over 1,500 students. Designed a PostgreSQL schema to manage student participation, projects, institutional partnerships, and program outcomes.",
        repo: "https://github.com/SamTusick/Switch4Good_DataBaseSystem",
        techStack: [
            { name: "Postgres", type: "icon"}
        ],
        image: switch4GoodPic,
        wip: false
        },
        
        SWTesting: {
        title: "Pinterest Testing Suites",
        description: "Led a software testing team in evaluating Pinterest.com through automated testing methodologies, developing Selenium-based test suites in Java to assess functionality, reliability, and usability. Collaborated on testing strategy, execution, and reporting to present findings and recommendations for improving software quality.",
        repo: "https://github.com/SamTusick/Pinterest_Testing_Final_Project",
        techStack: [
            { name: "Selenium", type: "icon"},
            { name: "Java", type: "icon" },
        ],
        image: pinterest,
        wip: false
        },

        AITutors: {
        title: "AI-Powered Tutors",
        description: "Leading the development of 14+ AI-powered tutoring systems now actively being tested within the FGCU's College of Engineering's 'The Learning Hub'. The work sits at the intersection of LLM application development and instructional design",
        techStack: [
            { name: "OpenAI", type: "icon"}
        ],
        image: aiTutor,
        wip: True
        },
        
        routerApp: {
        title: "Smart Router Monitoring App",
        description: "Led a team and developed a Flask-based web application that collects, stores, and visualizes real-time performance metrics from Mango, Beryl, and ASUS routers using SSH connections. Built a REST API and SQLite-backed data pipeline to support dashboard analytics, scheduled data collection, and historical performance insights.",
        repo: "https://github.com/nixguin/TrafficGuard-Upgraded",
        techStack: [
            { name: "Python", type: "image", src: pythonLogo },
            { name: "Flask", type: "icon" },
        ],
        image: routerPic,
        wip: false
        },

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

        trafficLight: {
        title: "Traffic Light System",
        description: "Developed a traffic light control system in AVR assembly that manages North/South and East/West vehicle signals along with pedestrian crosswalks. The program uses external interrupts to handle walk-button requests and timer-based delays to sequence light changes, including walk signal activation and blinking warnings. This project demonstrates low-level microcontroller programming, GPIO configuration, interrupt handling, and state-based control logic.",
        repo: "https://github.com/SamTusick/TrafficLight-Assembly",
        techStack: [
            { name: "Assembly", type: "image", src: asmLogo },
        ],
        image: asmPic,
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