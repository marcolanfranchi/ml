import "./styles/projects.css";
import { Icon } from '@iconify/react';
import { useState, useRef } from 'react';


const projectData = [
    {
        image: `${process.env.PUBLIC_URL}/images/sm-homepage.png`,
        title: "stock-models",
        tags: ["Data Engineering", "Machine Learning", "Database Management", "Front End"],
        description: "Developed stock data ingestion pipelines for a PostgreSQL database and an interactive \
        interface displaying stock prices and relevant news articles.",
        technologies: [
            <Icon icon="skill-icons:python-dark" />,
            <Icon icon="skill-icons:postgresql-dark" />,
            <Icon icon="skill-icons:scikitlearn-dark" />,
            <Icon icon="skill-icons:vercel-dark" />,
            // <Icon icon="skill-icons:github-dark" />
        ],
        link: "https://github.com/marcolanfranchi/stock-models",
    },
    {
        image: `${process.env.PUBLIC_URL}/images/this-projects.png`,
        title: "ml (this website)",
        tags: ["Web Application", "Front End"],
        description: "Created a simple portfolio website that you are currently viewing.",
        technologies: [
            <Icon icon="skill-icons:javascript" />,
            <Icon icon="skill-icons:react-dark" />,
            <Icon icon="skill-icons:css" />,
            <Icon icon="skill-icons:html" />,
            <Icon icon="skill-icons:vercel-dark" />,
            <Icon icon="skill-icons:npm-dark" />,
        ],
        link: "https://github.com/marcolanfranchi/ml",
    },
    {
        image: `${process.env.PUBLIC_URL}/images/iamt-homepage.png`,
        title: "iammusic-template",
        tags: ["Web Application", "Front End", "Cloud Storage"],
        description: "Developed a web-app for users to create their own version of \
        a popular artist's album cover, \
        incorporating a NoSQL cloud database to track and sanitize user \
        submissions. The site is consistently seeing over 10k monthly visitors.",
        technologies: [
            <Icon icon="skill-icons:javascript" />,
            <Icon icon="skill-icons:react-dark" />,
            <Icon icon="skill-icons:css" />,
            <Icon icon="skill-icons:html" />,
            <Icon icon="skill-icons:gcp-dark" />,
            <Icon icon="skill-icons:vercel-dark" />,
            <Icon icon="skill-icons:npm-dark" />,

        ],
        link: "https://github.com/marcolanfranchi/iammusic-template",
    },
    {
        image: `${process.env.PUBLIC_URL}/images/knn-homepage.png`,
        title: "digit-recognition-from-scratch",
        tags: ["Machine Learning", "Computer Vision", "Data Processing", "Front End"],
        description: "Implemented the K-nearest neighbors algorithm from scratch in Python \
        and built a Streamlit UI for real-time classification of handwritten digits.",
        technologies: [
            <Icon icon="skill-icons:python-dark" />,
        ],
        link: "https://github.com/marcolanfranchi/digit-recognition-from-scratch",
    },
    {
        image: `${process.env.PUBLIC_URL}/images/aita-code.png`,
        title: "aita-predictor",
        tags: ["Natural Language Processing", "Machine Learning", "Big Data Processing", "Front End"],
        description: "Developed a machine learning model to classify r/AmItheA-hole Reddit \
        posts using PySpark and vector embeddings to process large text, ensemble modeling with scikit-learn, \
        and a Streamlit UI for model deployment and testing.",
        technologies: [
            <Icon icon="skill-icons:python-dark" />,
            <Icon icon="skill-icons:scikitlearn-dark" />,
            <Icon icon="skill-icons:pytorch-dark" />,
            <Icon icon="skill-icons:pkl-dark" />,
            <Icon icon="skill-icons:anaconda-dark" />
        ],
        link: "https://github.com/marcolanfranchi/aita-predictor",
    },
    {
        image: `${process.env.PUBLIC_URL}/images/ftqb-game.png`,
        title: "find-the-queen-bee",
        tags: ["Game Development", "Build Automation", "Testing"],
        description: "Created a game in Java where players collect items, navigate obstacles, and avoid enemies \
        while trying to locate the queen bee. Utilized Maven for \
        automation and JaCoCo for full code test coverage.",
        technologies: [
            <Icon icon="skill-icons:java-dark" />,
            <Icon icon="skill-icons:maven-dark" />,
            <Icon icon="skill-icons:idea-dark" />
        ],
        link: "https://github.com/marcolanfranchi/find-the-queen-bee",
    },
    {
        image: `${process.env.PUBLIC_URL}/images/vcm-homepage.png`,
        title: "vancouver-crime-map",
        tags: ["Web Application", "Data Visualization", "Geospatial Analysis"],
        description: "Built and hosted an interactive web app visualizing over 1 million crime \
        records from Vancouver, using Folium for map-based data display with filtering and caching to optimize \
        performance.",
        technologies: [
            <Icon icon="skill-icons:python-dark" />,
            <Icon icon="skill-icons:html" />,
            <Icon icon="skill-icons:sqlite" />

        ],
        link: "https://github.com/marcolanfranchi/vancouver-crime-map",
    },
];


export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const projectsRef = useRef(null); // Reference to the projects section

    const handleToggle = () => {
        setShowAll(!showAll);
        if (projectsRef.current) {
            // Scroll to the projects section after toggling
            projectsRef.current.scrollIntoView({ behavior: 'instant' });
        }
    };

    return (
        <div>
            <h2 className="sub">projects</h2>
            <div ref={projectsRef} className="projects-grid">
                {projectData
                    .slice(0, showAll ? projectData.length : 4)
                    .map((project, index) => (
                        <a
                            href={project.link}
                            key={index}
                            className="project-card"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-image"
                            />
                            <h3 className="project-title">{project.title}</h3>
                            <div className="project-tags">
                                {project.tags.map((tag, idx) => (
                                    <span key={idx} className="project-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <p className="project-description">
                                {project.description}
                            </p>
                            {/* <div className="project-technologies">
                                {project.technologies.map((icon, idx) => (
                                    <span key={idx} className="tech-icon">{icon}</span>
                                ))}
                            </div> */}
                        </a>
                    ))}
            </div>
            <div className="view-all-container">
                <span className="view-all" onClick={handleToggle}>
                    {showAll ? `show less` : `view all (${projectData.length})`}
                </span>
            </div>
        </div>
    );
}
