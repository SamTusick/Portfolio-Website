/* Home Page */
import "../styling/home.css";
import { Typewriter } from 'react-simple-typewriter';
import { useReducedMotion } from "framer-motion";
import panelPic from "../assets/home-panel.webp";

const roles = [
  'An AI & Automation Engineer',
  'An Aspiring Software Engineer',
  'An Agentic AI Research & Developer',
  'A Full-Stack Developer',
  'A Lifelong Learner',
  'An Outdoor Explorer',
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

      </div>

      <div className="home-image">
        <img src={panelPic} alt="Picture of Samuel Tusick" width={1000} height={807} />
      </div>
    </section>
  );
}
