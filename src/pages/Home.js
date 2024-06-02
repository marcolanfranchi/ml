import React, { useEffect, useState } from 'react';
import './home.css';

const descriptions = [
    "murphy",
    "golf simulator with my friend",
    "lucki concert",
    "recent co-op office",
];
const images = [
    '/images/image1.png',
    '/images/image2.png',
    '/images/image3.png',
    '/images/image4.png',
]


export default function Home() {
    const [typedText, setTypedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    // const [isComplete, setIsComplete] = useState(false);
    const fullText = "currently in my 3rd year of a BSc in data science @ SFU and seeking an internship for fall 2024.";

    useEffect(() => {
        if (currentIndex < fullText.length) {
            setTimeout(() => {
                setTypedText(typedText + fullText[currentIndex]);
                setCurrentIndex(currentIndex + 1);
            }, 50);
        } else {
            // setIsComplete(true);
        }
    }, [currentIndex, typedText, fullText]);

    return (
        <div className="home-container">
            <h1>marco lanfranchi</h1>
            <p className="typing-effect">{typedText}</p>
            {// isComplete &&
             (
                <div className="grid-container">
                    {images.map((image, index) => (
                        <div key={index} className="grid-item">
                            <img src={image} alt={`Pic ${index + 1}`} />
                            <div className="description">{descriptions[index]}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
