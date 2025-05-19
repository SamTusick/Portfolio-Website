import React from "react";
import "../styling/navbar.css"

function NavBar() {
    return(
       <header className="navbar">
        <div className="navbar-title">Samuel Tusick</div>
        <nav className="navbar-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#academic">Academic</a>
            <a href="#contact">Contact</a>
        </nav>
       </header> 
    );
}

export default NavBar;