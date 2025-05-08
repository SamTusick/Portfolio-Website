import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Academic from "./pages/Academic";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}