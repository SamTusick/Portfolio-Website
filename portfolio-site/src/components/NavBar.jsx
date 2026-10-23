import { useEffect, useRef, useState } from "react";
import "../styling/navbar.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  // Close the menu on Escape and return focus to the toggle button.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <header className="navbar">
      <a className="navbar-title" href="#home">Samuel Tusick</a>

      {/* Hamburger toggle button (visible only on mobile) */}
      <button
        ref={buttonRef}
        type="button"
        className="hamburger"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="primary-nav"
      >
        <span aria-hidden="true">☰</span>
      </button>

      {/* Nav links with conditional "open" class */}
      <nav id="primary-nav" className={`navbar-links ${isOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
        <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </nav>
    </header>
  );
}

export default NavBar;
