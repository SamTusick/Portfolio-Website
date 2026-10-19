/* Projects Data
   Cards render in the order they appear here. */
import viteLogo from "../assets/icons8-vite-48.png"
import portfolioImage from "../assets/portfolio-site.webp"
import pythonLogo from "../assets/python.png"
import cppLogo from "../assets/icons8-c-48.png"
import statLogo from "../assets/nhl-stats.webp"
import schoolImg from "../assets/school-management.webp"
import asmLogo from "../assets/assembly-logo.webp"
import asmPic from "../assets/traffic-light.webp"
import routerPic from "../assets/router.webp"
import pinterest from "../assets/pinterest.webp"
import switch4GoodPic from "../assets/switch4good.webp"
import aiTutor from "../assets/ai-tutor.webp"
import ragAgentPic from "../assets/rag-email.webp"
import lambdaLogo from "../assets/Lambda.png"
import auroraLogo from "../assets/Aurora.png"
import cognitoLogo from "../assets/Cognito.png"
import maivalogo from "../assets/maiva_logo.png"
import dendriticDiagram from "../assets/diagram-dendritic.svg"
import payloadDiagram from "../assets/diagram-payload.svg"
import carSimDiagram from "../assets/diagram-carsim.svg"
import testNG from "../assets/testng.webp"
import raspberryPi from "../assets/rasbperry_pi.jpg"
import openrocket from "../assets/open_rocket.jpg"
import pygame from "../assets/pygame_logo.png"
import gymnasium from "../assets/gymnasium-text.png"

// Tech stack entries: type "image" shows a logo, type "icon" looks the name up
// in icons.js, type "text" shows a plain text chip.
const data = {
    MAIVA: {
        title: "MAIVA: AI Virtual Patient Training Platform",
        description: "I co-own architecture, data modeling, and technology decisions, turning requirements from two clinical assistant professors into a platform where students practice clinical interviews with AI-simulated psychiatric patients by chat, voice, or 3D avatar. I designed the orchestrator service that connects the UI, speech-to-text, text-to-speech, and the LLM API for every mode. It streams the patient's reply sentence by sentence over a WebSocket, saves each turn to the database in real time, and rebuilds a session from the saved transcript after a restart. I also built the speech-to-text feature and the safety-escalation flow that pauses the session clock, and refactored large parts of the React frontend.",
        note: "Private codebase, no public repo. Chat and voice mode are in active testing with real mental health professionals, avatar mode in development. Runs in Local, Dev, and Test environments.",
        techStack: [
            { name: "React", type: "icon" },
            { name: "TypeScript", type: "icon" },
            { name: "Tailwind", type: "icon" },
            { name: "AWS", type: "icon" },
            { name: "Lambda", type: "image", src: lambdaLogo },
            { name: "Aurora", type: "image", src: auroraLogo },
            { name: "Cognito", type: "image", src: cognitoLogo },
            { name: "CDK", type: "text" },
        ],
        image: maivalogo,
        imageAlt: "Diagram: the MAIVA orchestrator service connecting the UI, speech-to-text, text-to-speech, LLM API, and database",
        inProgress: true,
    },
    DendriticAutomation: {
        title: "Dendritic Automation Systems",
        description: "Built the AIVA pipeline, which turns professor PDFs and slide decks into narration scripts and then generates the avatar video and matching slide deck, for an estimated 45% efficiency gain. Also built a reusable institute handbook generator, a 9 AM Jira briefing posted to Microsoft Teams, and event-driven Teams alerts for monitored folders. These are used by the dev, infrastructure, and media teams and across the institute.",
        techStack: [
            { name: "LLM API", type: "text" },
            { name: "Jira", type: "icon" },
            { name: "Microsoft Teams", type: "icon" },
        ],
        image: dendriticDiagram,
        imageAlt: "Diagram: the AIVA course production pipeline, the Jira daily briefing, and the folder event notifications",
    },
    RAG_Email: {
        title: "RAG Email Agent",
        description: "A multi-tenant email triage system built from scratch in Python and Flask, with no orchestration frameworks, so I own every step of the RAG pipeline: chunking, embeddings, pgvector retrieval, and summarization. It connects to Outlook and sends personalized, timezone-aware daily digests with idempotent delivery. It runs serverless on AWS with encrypted token storage.",
        repo: "https://github.com/SamTusick/Rag-Email-Agent",
        techStack: [
            { name: "Python", type: "image", src: pythonLogo },
            { name: "Flask", type: "icon" },
            { name: "AWS", type: "icon" },
            { name: "Postgres", type: "icon" },
            { name: "Outlook", type: "icon" },
        ],
        image: ragAgentPic,
        inProgress: false,
    },
    LandingSite: {
        title: "Real-Time Landing Site Detection with ML",
        description: "I lead a 4-person team selected as one of two winners of the FGCU Payload Challenge, with funding and a flight on the Deeptech Club's high-power rocket. A camera-only payload runs a segmentation model live on a Raspberry Pi to label terrain safe or unsafe, with IMU, barometer, and GPS logging, and every frame and sensor reading is saved for analysis. We test during powered ascent rather than parachute descent to stress the model with flame, vibration, spin, and motion blur. Done so far: an OpenRocket flight simulation and a pretrained-model proof of concept.",
        note: "Targets, not results: at least 2 predictions per second and 80% pixel accuracy, reported either way.",
        wip: false
        },
        S4Good: {
        title: "Switch4Good Impact Tracking Database",
        description: "Led a team developing a database system for Switch4Good to support impact tracking across more than 100 universities and over 1,500 students. Designed a PostgreSQL schema to manage student participation, projects, institutional partnerships, and program outcomes.",
        repo: "https://github.com/SamTusick/Switch4Good_DataBaseSystem",
        techStack: [
            { name: "Raspberry Pi", type: "image", src: raspberryPi },
            { name: "Segmentation model", type: "text" },
            { name: "OpenRocket", type: "image", src: openrocket },
        ],
        image: payloadDiagram,
        imageAlt: "Diagram: a camera feeds a segmentation model on a Raspberry Pi that labels terrain, alongside IMU, barometer, and GPS logging",
        inProgress: true,
    },
    CarSim: {
        title: "ML Self-Driving Car Simulator",
        description: "A Python and Pygame environment, compatible with Gymnasium, with steering-based car physics, pixel-mask collision, five ray-cast sensors, and checkpoints. I'm building the neural network and genetic algorithm trainer from scratch with no ML libraries, and the network does not exist yet. Baseline: a random policy over 1,000 episodes finished the track 0 times, and only 2 episodes passed even one checkpoint.",
        repo: "https://github.com/SamTusick/ml-car-sim",
        techStack: [
            { name: "Python", type: "image", src: pythonLogo },
            { name: "Pygame", type: "image", src: pygame },
            { name: "Gymnasium", type: "image", src: gymnasium },
        ],
        image: carSimDiagram,
        imageAlt: "Diagram: the built simulator environment, and the planned neural network and genetic algorithm trainer",
        inProgress: true,
    },

    S4Good: {
        title: "Switch4Good Impact Tracking Database",
        description: "Led development of a PostgreSQL database and schema for Switch4Good covering participation, projects, partnerships, and outcomes, supporting 100+ universities and 1,500+ students.",
        repo: "https://github.com/SamTusick/Switch4Good_DataBaseSystem",
        techStack: [
            { name: "Postgres", type: "icon" }
        ],
        image: switch4GoodPic,
    },

    SWTesting: {
        title: "Pinterest Testing Suites",
        description: "Led a 2-person team testing Pinterest.com for functionality, usability, and regression with Selenium and TestNG suites in Java. Contributed to all 46 test cases across 8 modules (personally authored 25) with a 97.8% pass rate, and diagnosed and resolved bot-detection rate limiting by restructuring login test timing.",
        repo: "https://github.com/SamTusick/Pinterest_Testing_Final_Project",
        techStack: [
            { name: "Selenium", type: "icon" },
            { name: "Java", type: "icon" },
            { name: "TestNG", type: "image", src: testNG },
        ],
        image: pinterest,
    },

    routerApp: {
        title: "Smart Router Monitoring App",
        description: "Led backend architecture decisions and task coordination for a 5-member Eagle CyberNest Lab team delivering a home-network security platform on schedule. Built Flask backend services with SSH and SQLite for real-time, centralized monitoring across three router platforms (Mango, Beryl, and ASUS), and tested and deployed the router-communication scripts.",
        repo: "https://github.com/nixguin/TrafficGuard-Upgraded",
        techStack: [
            { name: "Python", type: "image", src: pythonLogo },
            { name: "Flask", type: "icon" },
        ],
        image: routerPic,
    },

    AITutors: {
        title: "AI-Powered Tutors",
        description: "Built 14 curriculum-specific AI tutors, grounded in curated course materials, for FGCU's Engineering Learning Hub. This work is done at Dendritic along with The Learning Hub.",
        techStack: [],
        image: aiTutor,
    },

    nhlScraper: {
        title: "NHL Stat Web Scraper",
        description: "A Selenium-based Flask scraper covering 15+ stat categories for every NHL player, exposed through REST APIs, with a React and Vite frontend for filterable stat views.",
        repo: "https://github.com/SamTusick/NHL-Web-Scraping",
        techStack: [
            { name: "Selenium", type: "icon" },
            { name: "Python", type: "image", src: pythonLogo },
            { name: "Flask", type: "icon" },
        ],
        image: statLogo,
    },

    schoolManagement: {
        title: "School Management System",
        description: "A simple C++ & SQLite3-based task manager that lets you keep track of assignments, quizzes, and events. This project demonstrates database integration with sqlite3 for persistence, along with a command-line interface for task management.",
        repo: "https://github.com/SamTusick/School-Management-System",
        techStack: [
            { name: "C++", type: "image", src: cppLogo },
            { name: "SQLite", type: "icon" },
        ],
        image: schoolImg,
    },

    trafficLight: {
        title: "Traffic Light System",
        description: "Developed a traffic light control system in AVR assembly that manages North/South and East/West vehicle signals along with pedestrian crosswalks. The program uses external interrupts to handle walk-button requests and timer-based delays to sequence light changes, including walk signal activation and blinking warnings. This project demonstrates low-level microcontroller programming, GPIO configuration, interrupt handling, and state-based control logic.",
        repo: "https://github.com/SamTusick/TrafficLight-Assembly",
        techStack: [
            { name: "Assembly", type: "image", src: asmLogo },
        ],
        image: asmPic,
    },

    portfolioWebsite: {
        title: "Portfolio Website",
        description: "A modern, responsive portfolio website built with React and Vite to showcase my projects, skills, and academic experience. Designed for clarity, performance, and personalization.",
        repo: "https://github.com/SamTusick/Portfolio-Website",
        techStack: [
            { name: "React", type: "icon" },
            { name: "Vite", type: "image", src: viteLogo },
            { name: "GitHub Actions", type: "icon" },
        ],
        image: portfolioImage,
    },
};

export default data;
