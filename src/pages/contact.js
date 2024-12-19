import React from 'react';
import "./styles/contact.css";

export default function Contact() {

    return (
        <div>
            <h2 className="sub">contact</h2>
            <ul className="contacts-list">
                <li>
                    <i className="fab fa-github"></i>
                    <a href="https://github.com/marcolanfranchi" target="_blank" rel="noopener noreferrer">
                        github.com/marcolanfranchi
                    </a>
                </li>
                <li>
                    <i className="fab fa-linkedin"></i>
                    <a href="https://linkedin.com/in/marco--lanfranchi" target="_blank" rel="noopener noreferrer">
                        linkedin.com/in/marco--lanfranchi
                    </a>
                </li>
                <li>
                    <i className="fas fa-envelope"></i>
                    <a href="mailto:marcolanfranchi02@gmail.com">marcolanfranchi02@gmail.com</a>
                </li>
            </ul>
        </div>
    );
}
