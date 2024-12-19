import "./styles/about.css";

export default function About() {

    return (
        <div>
            <h2 className="sub">about</h2>
            <h3 className="subsub">work experience</h3>
            {/* jobs */}
            {/* Samsung */}
            <div className="job-card">
                <div className="job-header">
                    <span className="job-title">Database Engineer Intern @ Samsung R&D (Upcoming)</span>
                    <span className="job-date">Jan 2025 - Aug 2025</span>
                </div>
                {/* <div className="job-company">Samsung R&D</div> */}
                <div className="job-location">Vancouver, BC</div>
            </div>
            {/* Nettwerk */}
            <div className="job-card">
                <div className="job-header">
                    <span className="job-title">Data Analyst Intern @ Nettwerk Music Group</span>
                    <span className="job-date">Sept 2023 - May 2024</span>
                </div>
                {/* <div className="job-company">Nettwerk Music Group</div> */}
                <div className="job-location">Vancouver, BC</div>
            </div>
            {/* Industrio */}
            <div className="job-card">
                <div className="job-header">
                    <span className="job-title">Volunteer Jr. Data Scientist @ Industrio AI</span>
                    <span className="job-date">Jan 2023 - Apr 2023</span>
                </div>
                {/* <div className="job-company">Industrio AI</div> */}
                <div className="job-location">Vancouver, BC</div>
            </div>
            <div className="-space"> <p></p></div>
            <h3 className="subsub">education</h3>
            {/* School */}
            {/* SFU */}
            <div className="school-card">
                <div className="job-header">
                    <span className="job-title">Bachelor of Science in Data Science</span>
                    <span className="job-date">Sept 2022 ~ May 2026</span>
                </div>
                <div className="job-company">Simon Fraser University</div>
                <div className="job-location">Burnaby, BC</div>
            </div>
            {/* <div className="blank-space"> <p></p></div>
            <h2 className="sub-header">Skills</h2>
            <p style={{textAlign:'left'}}>Including some relevant work experience, projects, and courses.</p>
            
            <div className="skills-section">
                <div className="skill">
                    <h3>Database Management</h3>
                    <ul>
                        <li>
                        <a href="https://github.com/marcolanfranchi/stock-models" target="_blank" rel="noopener noreferrer">stock-models</a>,
                        <a href="https://www.sfu.ca/students/calendar/2024/fall/courses/cmpt/354.html" target="_blank" rel="noopener noreferrer"> CMPT 354</a>
                        </li>
                    </ul>
                </div>
                <div className="skill">
                    <h3>Data Analysis</h3>
                    <ul>
                        <li>Data Analyst @ <a href="https://nettwerk.com/" target="_blank" rel="noopener noreferrer">Nettwerk</a>,
                        <a href="https://github.com/marcolanfranchi/VancouverCrimeMap" target="_blank" rel="noopener noreferrer"> vancouver-crime-map</a>,
                        <a href="https://www.sfu.ca/students/calendar/2024/fall/courses/stat/302.html" target="_blank" rel="noopener noreferrer"> STAT 302</a> ,
                        <a href="https://www.sfu.ca/students/calendar/2025/spring/courses/stat/240.html" target="_blank" rel="noopener noreferrer"> STAT 240</a>
                        </li>

                    </ul>
                </div>
                <div className="skill">
                    <h3>Software Development</h3>
                    <ul>
                        <li>
                        <a href="https://github.com/marcolanfranchi/ml" target="_blank" rel="noopener noreferrer"> this website</a>,
                        <a href="https://github.com/marcolanfranchi/iammusic-template" target="_blank" rel="noopener noreferrer"> iammusic-template</a>,
                        <a href="https://www.sfu.ca/students/calendar/2024/fall/courses/cmpt/307.html" target="_blank" rel="noopener noreferrer"> CMPT 307</a>, 
                        <a href="https://www.sfu.ca/students/calendar/2024/fall/courses/cmpt/295.html" target="_blank" rel="noopener noreferrer"> CMPT 295</a>,
                        <a href="https://www.sfu.ca/students/calendar/2024/fall/courses/cmpt/276.html" target="_blank" rel="noopener noreferrer"> CMPT 276</a>
                        </li>
                    </ul>
                </div>
                <div className="skill">
                    <h3>Machine Learning</h3>
                    <ul>
                        <li><a href="https://github.com/marcolanfranchi/AITA-predictor" target="_blank" rel="noopener noreferrer">aita-predictor</a>,
                        <a href="https://github.com/marcolanfranchi/digit-recognition-from-scratch" target="_blank" rel="noopener noreferrer"> digit-recognition-from-scratch</a>,
                        <a href="https://www.sfu.ca/students/calendar/2024/fall/courses/cmpt/353.html" target="_blank" rel="noopener noreferrer"> CMPT 353</a>,
                        <a href="https://www.sfu.ca/students/calendar/2025/spring/courses/math/308.html" target="_blank" rel="noopener noreferrer"> MATH 308w</a>
                        </li>
                    </ul>
                </div>
            </div> */}
            {/* <div className="blank-space"><p></p></div> */}
            {/* INTERESTS SECTION */}
            {/* <h2 className="sub-header">interests</h2> */}
            <div>
            <div className="blank-space"> <p></p></div>
            <section className="section">
                <h3 className="subsub">what i'm currently up to</h3>
                <ul className="list">
                    <li>taking linear optimization, R for data science, and a couple other courses at SFU.</li>
                    <li>working on personal projects and refining database skills in preparation for an internship.</li>
                </ul>
            </section>
        </div>
        </div>
    );
}
