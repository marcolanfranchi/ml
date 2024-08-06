import "./about.css";
import { FaPython, FaDatabase, FaGithub} from 'react-icons/fa'; // Importing icons

// import { ReactComponent as PythonIcon } from './assets/icons/python.svg';
// import { ReactComponent as DatabaseIcon } from './assets/icons/database.svg';
// import { ReactComponent as GithubIcon } from './assets/icons/github.svg';

import { ReactComponent as snowflakeIcon } from './skill_icons/snowflake-icon.svg';

export default function About() {

    return (
        <div className="about-container">
            <h1>about me</h1>
            <div className="blank-space"> <p></p></div>
            <h2 className="sub-header">experience</h2>
            {/* jobs */}
            {/* Nettwerk */}
            <div className="job-card">
                <div className="job-header">
                    <span className="job-title">Data Analyst Intern</span>
                    <span className="job-date">Sept 2023 - May 2024</span>
                </div>
                <div className="job-company">Nettwerk Music Group</div>
                <div className="job-location">Vancouver, BC</div>
                <ul className="job-description">
                    <li>Developed an Artificial Streams Dashboard to flag, visualize, and contextualize artifical streaming activity (bots or scripts) across the label's 100’s of artists including Bôa, The Paper Kites, Passenger, and more.</li>
                    <li>Created and optimized a US City dashboard for strategic tour planning and radio placements, utilizing SQL for data extraction and Tableau for dashboard creation.</li>
                    <li>Developed an application for analysts to obtain comprehensive artist data for planning meetings, using Python and Streamlit for the UI and SQL for data retrieval.</li>
                </ul>
                <div className="job-technologies">
                    <FaPython className="tech-icon" />
                    <FaDatabase className="tech-icon" />
                    <FaGithub className="tech-icon" />
                </div>
            </div>
            {/* Industrio */}
            <div className="job-card">
                <div className="job-header">
                    <span className="job-title">Volunteer Jr. Data Scientist</span>
                    <span className="job-date">Jan 2023 - May 2023</span>
                </div>
                <div className="job-company">Industrio AI</div>
                <div className="job-location">Vancouver, BC</div>
                <ul className="job-description">
                    <li>Collaborated with a small team at Industrio AI, contributing to AI and DataOps services for clients.</li>
                    <li>Developed front-end features for a fuel cell engineering company’s app, including dynamic tables and PostgreSQL integration
                    by using Python and libraries like Streamlit and Plotly.</li>
                </ul>
                <div className="job-technologies">
                    <FaPython className="tech-icon" />
                    <FaDatabase className="tech-icon" />
                    <FaGithub className="tech-icon" />
                    <snowflakeIcon className="tech-icon" />
                </div>
            </div>
            <div className="blank-space"> <p></p></div>
            <h2 className="sub-header">education</h2>
            {/* School */}
            {/* SFU */}
            <div className="school-card">
                <div className="job-header">
                    <span className="job-title">BSc in Data Science</span>
                    <span className="job-date">Sept 2022 ~ 2025</span>
                </div>
                <div className="job-company">Simon Fraser University</div>
                <div className="job-location">Burnaby, BC</div>
            </div>
            {/* UBC */}
            <div className="school-card">
                <div className="job-header">
                    <span className="job-title">BA (University Transfer)</span>
                    <span className="job-date">Sept 2020 - August 2022</span>
                </div>
                <div className="job-company">University of British Columbia</div>
                <div className="job-location">Vancouver, BC</div>
                {/* <div className="job-technologies">
                    <FaPython className="tech-icon" />
                    <FaDatabase className="tech-icon" />
                    <FaGithub className="tech-icon" />
                </div> */}
            </div>
            <div className="blank-space"> <p></p></div>
            <h2 className="sub-header">skills</h2>
            <p style={{textAlign:'left'}}>including relevant projects/work/courses</p>
            {/* skills */}
            <div className="skills-section">
                <div className="skill">
                    <h3>Data Visualization</h3>
                        <p><a href="https://github.com/marcolanfranchi/VancouverCrimeMap" target="_blank" rel="noopener noreferrer">Vancouver Crime Map</a>,
                         <a href="https://github.com/marcolanfranchi/Artificial-Streams-Dashboard" target="_blank" rel="noopener noreferrer">STAT 240 Intro to Data Science</a></p>
                </div>
                <div className="skill">
                    <h3>Data Analysis</h3>
                        <p>Data Insights Analyst @ <a href="https://nettwerk.com/" target="_blank" rel="noopener noreferrer">Nettwerk</a>, 
                         <a href="https://www.sfu.ca/students/calendar/2024/fall/courses/stat/302.html" target="_blank" rel="noopener noreferrer"> STAT 302 Analysis of Experimental and Observational Data</a>,
                         <a href="https://www.sfu.ca/students/calendar/2024/fall/courses/stat/240.html" target="_blank" rel="noopener noreferrer"> STAT 240 Intro to Data Science</a></p>
                </div>
                <div className="skill">
                    <h3>Software Development</h3>
                    <p><a href="https://github.com/marcolanfranchi/img-transformer" target="_blank" rel="noopener noreferrer">img-transformer</a>, 
                    <a href="https://github.com/marcolanfranchi/iammusic-template" target="_blank" rel="noopener noreferrer">iammusic-template</a>,
                    <a href="https://www.sfu.ca/students/calendar/2024/fall/courses/cmpt/307.html" target="_blank" rel="noopener noreferrer"> CMPT 307 Data Structures and Algorithms</a>,
                    <a href="https://www.sfu.ca/students/calendar/2024/fall/courses/cmpt/295.html" target="_blank" rel="noopener noreferrer"> CMPT 295 Introduction to Computer Systems</a>,
                         <a href="https://www.sfu.ca/students/calendar/2024/fall/courses/cmpt/276.html" target="_blank" rel="noopener noreferrer"> CMPT 276 Introduction to Software Engineering</a></p>
                </div>
                <div className="skill">
                    <h3>Machine Learning</h3>
                        <p><a href="https://github.com/marcolanfranchi/AITA-Predictor" target="_blank" rel="noopener noreferrer">AITA-Predictor</a>, 
                         <a href="https://www.sfu.ca/students/calendar/2024/fall/courses/cmpt/353.html" target="_blank" rel="noopener noreferrer">CMPT 353 Computational Data Science</a>,
                         <a href="https://www.sfu.ca/students/calendar/2024/fall/courses/math/208w.html" target="_blank" rel="noopener noreferrer">MATH 208w Intro to Operations Research</a></p>
                </div>
                <div className="skill">
                    <h3>Database Management</h3>
                        <p><a href="https://www.sfu.ca/students/calendar/2024/fall/courses/cmpt/354.html" target="_blank" rel="noopener noreferrer">CMPT 354</a></p>
                </div>
            </div>
            <div className="blank-space"><p></p></div>
            {/* INTERESTS SECTION */}
            {/* <h2 className="sub-header">interests</h2> */}
        </div>
    );
}
