import "./styles/about.css";

export default function About() {
    return (
        <div>
            <h2 className="sub">about</h2>
            <h3 className="subsub">work</h3>
            {/* Jobs List */}
            <ul className="job-list">
                {/* Samsung */}
                <li className="job-item">
                    <div className="job-header">
                        <span className="job-title">Database Engineer Intern @ Samsung R&D (Upcoming)</span>
                        <span className="job-date">Jan 2025 - Aug 2025</span>
                    </div>
                    <div className="job-location">Vancouver, BC</div>
                </li>
                {/* Nettwerk */}
                <li className="job-item">
                    <div className="job-header">
                        <span className="job-title">Data Analyst Intern @ Nettwerk Music Group</span>
                        <span className="job-date">Sept 2023 - May 2024</span>
                    </div>
                    <div className="job-location">Vancouver, BC</div>
                </li>
                {/* Industrio */}
                <li className="job-item">
                    <div className="job-header">
                        <span className="job-title">Volunteer Jr. Data Scientist @ Industrio AI</span>
                        <span className="job-date">Jan 2023 - Apr 2023</span>
                    </div>
                    <div className="job-location">Vancouver, BC</div>
                </li>
            </ul>

            <div className="space"></div>

            <h3 className="subsub">education</h3>
            {/* Education */}
            <ul className="education-list">
                {/* SFU */}
                <li className="education-item">
                    <div className="job-header">
                        <span className="job-title">BSc in Data Science, Simon Fraser University</span>
                        <span className="job-date">Sep 2022 - May 2026</span>
                    </div>
                    {/* <div className="job-company">Simon Fraser University</div> */}
                    <div className="job-location">Burnaby, BC</div>
                </li>
            </ul>

            <div className="blank-space"></div>

            <section className="section">
                <h3 className="subsub">what i'm currently up to</h3>
                <ul className="list">
                    <li>taking linear optimization, R for data science, and a couple other courses at SFU.</li>
                    <li>working on personal projects and refining database skills in preparation for an internship.</li>
                </ul>
            </section>
        </div>
    );
}
