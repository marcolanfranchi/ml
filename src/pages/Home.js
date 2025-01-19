import React, { useEffect, useState } from 'react';
import './styles/home.css';
import About from './about';
import Projects from './projects';
import Contact from './contact';

export default function Home() {
    const [activeSection, setActiveSection] = useState('');
    const [text, setText] = useState(''); // State to hold the typed text
    const fullText = "I am in my 4th year of a BSc in Data Science at SFU, focusing on database systems and cloud computing.";

    // Typing effect logic
    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setText((prevText) => {
                const updatedText = prevText + fullText[index];
                index += 1;
                return updatedText;
            });

            if (index === fullText.length-1) {
                clearInterval(intervalId); // Stop when the full text is typed
            }
        }, 50); // Adjust typing speed here (100ms per character)

        return () => clearInterval(intervalId); // Clean up the interval on component unmount
    }, []);

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
            <p className="full-text typing-effect">
                {text}
                <span className="cursor">|</span>
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
