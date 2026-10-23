import { MotionConfig } from "framer-motion";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

function App() {
  return (
    // reducedMotion="user" turns off movement animations when the OS asks for less motion.
    <MotionConfig reducedMotion="user">
      <NavBar />
      <main>
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="projects"><Projects /></div>
        <div id="skills"><Skills /></div>
        <div id="experience"><Experience /></div>
        <div id="contact"><Contact /></div>
      </main>
    </MotionConfig>
  );
}

export default App;
