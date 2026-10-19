/* Home Page */
import "../styling/home.css";
import { Typewriter } from 'react-simple-typewriter';
import { useReducedMotion } from "framer-motion";
import panelPic from "../assets/home-panel.webp";

const roles = [
  'An AI & Automation Engineer',
  'A Full-Stack Developer',
  'A Lifelong Learner',
];

const stats = [
  { value: "14", label: "AI tutors" },
  { value: "500+", label: "Academy participants" },
  { value: "150+", label: "instructional hours" },
];

export default function Home(){
  const reduceMotion = useReducedMotion();

  return(
    <section className="home-section">
      <div className="home-content">
        <div className="home-intro-group">
          <p className="home-intro">Hello, I'm</p>
          <h1 className="home-name">Samuel Tusick</h1>
        </div>

        <h2 className="typewriter-text">
          <span className="home-typewriter-static">I'm&nbsp;</span>
          <span className="home-typewriter-dynamic">
            {reduceMotion ? roles[0] : (
              <Typewriter
                words={roles}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            )}
          </span>
        </h2>

        <p className="home-value">
          I build AI and automation systems that real teams use, and I build from scratch to learn the fundamentals.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="home-button home-button-primary">View Projects</a>
          <a
            href={`${import.meta.env.BASE_URL}Samuel_Tusick_Resume_2026.pdf`}
            className="home-button"
            download
          >
            Download Resume
          </a>
          <a href="#contact" className="home-button">Contact</a>
        </div>

        <ul className="home-stats">
          {stats.map((stat) => (
            <li key={stat.label}>
              <span className="home-stat-value">{stat.value}</span>
              <span className="home-stat-label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="home-image">
        <img src={panelPic} alt="Picture of Samuel Tusick" width={1000} height={807} />
      </div>
    </section>
  );
}
