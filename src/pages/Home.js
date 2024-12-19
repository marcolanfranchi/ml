import React, { useEffect, useState } from 'react';
import './styles/home.css';
import About from './about';
import Projects from './projects';
import Contact from './contact';

export default function Home() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const aboutPosition = document.getElementById('about')?.offsetTop || 0;
            const projectsPosition = document.getElementById('projects')?.offsetTop || 0;
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            if (scrollPosition >= aboutPosition) {
                setActiveSection('about');
            } else if (scrollPosition >= projectsPosition) {
                setActiveSection('projects');
            } else {
                setActiveSection('');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`home-container ${activeSection}`}>
            <h1>Marco Lanfranchi</h1>
            <p className="full-text">
                currently in my 4th year of a BSc in data science at SFU.
            </p>
            <div id="projects" className="section-container">
                <Projects />
            </div>
            <div id="about" className="section-container">
                <About />
            </div>
            <div id="contact" className="section-container">
                <Contact />
            </div>
        </div>
    );
}
