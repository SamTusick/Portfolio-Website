/* Home Page */
import "../styling/home.css";
import { Typewriter } from 'react-simple-typewriter';
import panelPic from "../assets/Panel_pic.JPEG";

export default function Home (){

<section className="home-section">
  <div className="home-content">
    <div className="home-intro-group">
      <h1 className="home-intro">Hello, I'm</h1>
      <h1 className="home-name">Samuel Tusick</h1>
    </div>

    <h2 className="typewriter-text">
      <span className="home-typewriter-static">I'm&nbsp;</span>
      <span className="home-typewriter-dynamic">
        <Typewriter
          words={[
            'An Aspiring Software Engineer',
            'An Agentic AI Research & Developer',
            'A Full-Stack Developer',
            'Lifelong Learner', 
            'Fitness Enthusiast'
          ]}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </h2>
  </div>

  <div className="home-image">
    <img src={panelPic} alt="Picture of Samuel Tusick" />
  </div>
</section>

}