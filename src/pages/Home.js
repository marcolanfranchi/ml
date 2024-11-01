import React from 'react';
import './home.css';

const image1 = `${process.env.PUBLIC_URL}/images/moving.gif`;
const image2 = `${process.env.PUBLIC_URL}/images/moving2.gif`;
const image3 = `${process.env.PUBLIC_URL}/images/moving3.gif`;
// const image4 = 'images/moving4.gif';
// const descriptions = [
//     // "currently in my 4th year of a BSc in data science @ SFU. joining Samsung R&D Canada as a database engineer intern in Jan 2025.",
// ];

export default function Home() {
    const fullText = "currently in my 4th year of a BSc in data science @ SFU. joining Samsung R&D Vancouver as a database engineer intern in Jan 2025.";

    return (
        <div className="home-container">
            <h1 style={{ textAlign: 'left' }}>marco lanfranchi</h1>
            <p className="full-text" style={{ textAlign: 'left' }}>
                {fullText}
            </p>
            <div className="grid-item">
                <img 
                    src={image1} 
                    alt="Pic 1" 
                />
                <img 
                    src={image2} 
                    alt="Pic 2" 
                />
                <img 
                    src={image3} 
                    alt="Pic 1" 
                />
                {/* <img 
                    src={image4} 
                    alt="Pic 2" 
                /> */}
                {/* <p className="bottom-text">{descriptions[0]}</p> Always display the first description */}
            </div>
        </div>
    );
}
