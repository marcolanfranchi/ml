import React from "react";
import "./styles/navbar.css";

export default function Navbar() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="navbar">
            <button
                onClick={scrollToTop}
                className="nav-link"
            >
                &gt; home
            </button>
            <div className="nested-links">
                <button
                    onClick={() => scrollToSection("projects")}
                    className="nav-link"
                >
                    &gt; projects
                </button>
                <button
                    onClick={() => scrollToSection("about")}
                    className="nav-link"
                >
                    &gt; about
                </button>
                <button
                    onClick={() => scrollToSection("contact")}
                    className="nav-link"
                >
                    &gt; contact
                </button>
            </div>
        </nav>
    );
}
