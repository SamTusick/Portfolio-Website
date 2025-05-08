import { Link } from "react-router-dom";


function Header() {
    return(
        <div className = "header-component">
            <Link to = "/">Samuel Tusick</Link>
            <nav className = "header-nav">
                <Link to = "/">Home</Link>
                <Link to = "/About">About Me</Link>
                <Link to = "/Projects">Projects</Link>
                <Link to = "/Academic"> Academic</Link>
                <Link to = "/Contact">Contact Me</Link>
            </nav>
            <Link to = "/Contact" className="contact-icon">📧</Link>
        </div>
    );
}

export default Header;