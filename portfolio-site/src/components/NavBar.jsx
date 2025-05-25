import React, { useState } from "react";
import "../styling/navbar.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <header className="navbar">
      <a className="navbar-title" href="#home">Samuel Tusick</a>

      {/* Hamburger toggle button (visible only on mobile) */}
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      {/* Nav links with conditional "open" class */}
      <nav className={`navbar-links ${isOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
        <a href="#academic" onClick={() => setIsOpen(false)}>Academic</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </nav>
    </header>
  );
}

export default NavBar;
