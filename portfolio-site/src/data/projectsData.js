/* Projects Data
   Cards with featured: true show first; the rest sit under "More Projects". */
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
import maivaDiagram from "../assets/diagram-maiva.svg"
import dendriticDiagram from "../assets/diagram-dendritic.svg"
import payloadDiagram from "../assets/diagram-payload.svg"
import carSimDiagram from "../assets/diagram-carsim.svg"

// Tech stack entries: type "image" shows a logo, type "icon" looks the name up
// in icons.js, type "text" shows a plain text chip.
const data = {
    MAIVA: {
        featured: true,
        title: "MAIVA: AI Virtual Patient Training Platform",
        description: "I co-own architecture, data modeling, and technology decisions with a graduate researcher, with requirements coming from two university colleges. An orchestrator service connects the UI, speech-to-text, text-to-speech, and an LLM API, and each session starts from a master prompt filled with patient metadata. I built the speech-to-text feature and refactored large parts of the React frontend.",
        note: "Private codebase, no public repo. Runs in Local, Dev, and Test environments with real testers.",
        techStack: [
            { name: "React", type: "icon" },
            { name: "AWS", type: "icon" },
            { name: "Lambda", type: "text" },
            { name: "Aurora", type: "text" },
            { name: "Cognito", type: "text" },
            { name: "CDK", type: "text" },
        ],
        image: maivaDiagram,
        imageAlt: "Diagram: the MAIVA orchestrator service connecting the UI, speech-to-text, text-to-speech, LLM API, and database",
        inProgress: true,
    },
    DendriticAutomation: {
        featured: true,
        title: "Dendritic Automation Systems",
        description: "Built the AIVA pipeline, which turns professor PDFs and slide decks into narration scripts and then generates the avatar video and matching slide deck, for an estimated 45% efficiency gain. Also built a reusable institute handbook generator, a 9 AM Jira briefing posted to Microsoft Teams, and event-driven Teams alerts for monitored folders. These are used by the dev, infrastructure, and media teams and across the institute.",
        techStack: [
            { name: "LLM API", type: "text" },
            { name: "Jira", type: "text" },
            { name: "Microsoft Teams", type: "text" },
        ],
        image: dendriticDiagram,
        imageAlt: "Diagram: the AIVA course production pipeline, the Jira daily briefing, and the folder event notifications",
    },
    RAG_Email: {
        featured: true,
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
        inProgress: true,
    },
    LandingSite: {
        featured: true,
        title: "Real-Time Landing Site Detection with ML",
        description: "I lead a 3-person team selected as one of two winners of the FGCU Payload Challenge, with funding and a flight on the Deeptech Club's high-power rocket. A camera-only payload runs a segmentation model live on a Raspberry Pi to label terrain safe or unsafe, with IMU, barometer, and GPS logging, and is tested during powered ascent against flame, vibration, and motion blur. Done so far: an OpenRocket flight simulation and a pretrained-model proof of concept.",
        note: "Targets, not results: at least 2 predictions per second and 80% pixel accuracy, reported either way.",
        techStack: [
            { name: "Raspberry Pi", type: "text" },
            { name: "Segmentation model", type: "text" },
            { name: "OpenRocket", type: "text" },
        ],
        image: payloadDiagram,
        imageAlt: "Diagram: a camera feeds a segmentation model on a Raspberry Pi that labels terrain, alongside IMU, barometer, and GPS logging",
        inProgress: true,
    },
    CarSim: {
        featured: true,
        title: "ML Self-Driving Car Simulator",
        description: "A Python and Pygame environment, compatible with Gymnasium, with steering-based car physics, pixel-mask collision, five ray-cast sensors, and checkpoints. The neural network and genetic algorithm trainer will be written from scratch with no ML libraries, and the network does not exist yet. Baseline: a random policy over 1,000 episodes finished the track 0 times, and only 2 episodes passed even one checkpoint.",
        repo: "https://github.com/SamTusick/ml-car-sim",
        techStack: [
            { name: "Python", type: "image", src: pythonLogo },
            { name: "Pygame", type: "text" },
            { name: "Gymnasium", type: "text" },
        ],
        image: carSimDiagram,
        imageAlt: "Diagram: the built simulator environment, and the planned neural network and genetic algorithm trainer",
        inProgress: true,
    },

    S4Good: {
        title: "Switch4Good Impact Tracking Database",
        description: "Led a team building a database system for Switch4Good to track impact across more than 100 universities and over 1,500 students. Designed a PostgreSQL schema covering student participation, projects, institutional partnerships, and program outcomes.",
        repo: "https://github.com/SamTusick/Switch4Good_DataBaseSystem",
        techStack: [
            { name: "Postgres", type: "icon" }
        ],
        image: switch4GoodPic,
    },

    SWTesting: {
        title: "Pinterest Testing Suites",
        description: "Led a software testing team evaluating Pinterest.com with automated Selenium test suites written in Java. Covered functionality, reliability, and usability, and presented findings and recommendations.",
        repo: "https://github.com/SamTusick/Pinterest_Testing_Final_Project",
        techStack: [
            { name: "Selenium", type: "icon" },
            { name: "Java", type: "icon" },
        ],
        image: pinterest,
    },

    routerApp: {
        title: "Smart Router Monitoring App",
        description: "Led a team building a Flask web app that collects, stores, and visualizes real-time performance metrics from Mango, Beryl, and ASUS routers over SSH. Includes a REST API and a SQLite-backed pipeline for dashboards, scheduled collection, and historical insights.",
        repo: "https://github.com/nixguin/TrafficGuard-Upgraded",
        techStack: [
            { name: "Python", type: "image", src: pythonLogo },
            { name: "Flask", type: "icon" },
        ],
        image: routerPic,
    },

    AITutors: {
        title: "AI Tutors for the Engineering Learning Hub",
        description: "Built 14 curriculum-specific AI tutors for FGCU's Engineering Learning Hub as part of my work at the Dendritic Institute. The tutors are grounded in curated course materials.",
        techStack: [],
        image: aiTutor,
    },

    nhlScraper: {
        title: "NHL Stat Web Scraper",
        description: "A Python and React tool that scrapes real-time NHL data by category using Selenium. Built for quick access to player stat leaders.",
        repo: "https://github.com/SamTusick/NHL-Web-Scraping",
        techStack: [
            { name: "Selenium", type: "icon" },
            { name: "Python", type: "image", src: pythonLogo },
            { name: "Flask", type: "icon" },
        ],
        image: statLogo,
    },

    schoolManagement: {
        title: "School Management System (C++)",
        description: "A C++ and SQLite3 command-line task manager for tracking assignments, quizzes, and events. Demonstrates database integration and persistence.",
        repo: "https://github.com/SamTusick/School-Management-System",
        techStack: [
            { name: "C++", type: "image", src: cppLogo },
            { name: "SQLite", type: "icon" },
        ],
        image: schoolImg,
    },

    trafficLight: {
        title: "Traffic Light System (Assembly)",
        description: "A traffic light controller in AVR assembly that sequences North/South and East/West signals and pedestrian crosswalks. Uses external interrupts for walk requests and timer-based delays for light changes and blinking warnings.",
        repo: "https://github.com/SamTusick/TrafficLight-Assembly",
        techStack: [
            { name: "Assembly", type: "image", src: asmLogo },
        ],
        image: asmPic,
    },
};

export default data;
