import React from "react";
import "../styling/navbar.css"

function NavBar() {
    return(
       <header className="navbar">
        <a className="navbar-title" href="#home">Samuel Tusick</a>
        <nav className="navbar-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#academic">Academic</a>
            <a href="#contact">Contact</a>
        </nav>
       </header> 
    );
}

export default NavBar;