import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Academic from "./pages/Academic";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <section id = "home"><Home /></section>
      <section id = "about"><About /></section>
      <section id = "projects"><Projects /></section>
      <section id = "academic"><Academic /></section>
      <section id = "contact"><Contact /></section>
    </div>
    
  );
}

export default App;