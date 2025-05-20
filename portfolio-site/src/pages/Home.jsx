/* Home Page */
import "../styling/home.css";
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  return (
    <section className="home-section">
      <div className="home-intro-group">
        <h1 className="home-intro">Hello, I'm</h1>
        <h1 className="home-name">Samuel Tusick</h1>
      </div>
      <h2 className="typewriter-text">
        <span className="home-typewriter-static">I'm a&nbsp;</span>
        <span className="home-typewriter-dynamic">
          <Typewriter
            words={['Aspiring Software Engineer', 'Agentic AI Researcher', 'Full-Stack Developer']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h2>
    </section>
  );
}
