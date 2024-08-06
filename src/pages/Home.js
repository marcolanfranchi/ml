import React from 'react';
import './home.css';

const descriptions = [
    "murphy",
    "golf simulator with bro ahh",
    "lucki concert",
    "recent co-op office",
];
const image = '/images/moving.gif';

export default function Home() {
    const fullText = "currently in my 3rd year of a BSc in data science @ SFU and seeking an internship for fall 2024.";

    return (
        <div className="home-container">
            <h1>marco lanfranchi</h1>
            <p className="full-text">
                {fullText}
            </p>
            <div className="grid-item">
                <img 
                    src={image} 
                    alt="Pic 1" 
                />
                <p className="bottom-text">{descriptions[0]}</p> {/* Always display the first description */}
            </div>
        </div>
    );
}
