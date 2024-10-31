import "./projects.css";
import { Icon } from '@iconify/react';

const projectData = [
    {
        image: `${process.env.PUBLIC_URL}/images/sm-homepage.png`,
        title: "stock-models",
        tags: ["Data Engineering", "Machine Learning", "Database Management", "Front End"],
        description: "Developed a PostgreSQL-based system with a data pipeline and Streamlit \
        UI for storing, visualizing, and forecasting stock data, leveraging Python and Plotly\
        for interactive exploration and ongoing regression model development for performance prediction.",
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
        description: "Developed a React-based personal website which you are currently viewing.",
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
        description: "Developed a React-based web app with a customizable album cover \
        generator, incorporating a Cloud Firestore database to track and sanitize user \
        submissions, attracting over 7.5k monthly global users with prominent Google \
        search visibility.",
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
        description: "Implemented a K-nearest neighbors algorithm from scratch in Python \
        with a Streamlit UI for real-time classification of handwritten digits from the \
        MNIST dataset, allowing users to draw digits, adjust parameters, and view \
        visualizations of the k-nearest neighbors.",
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
        posts using PySpark for large-scale text processing, ensemble modeling with scikit-learn \
        for improved accuracy, and a Streamlit UI for interactive story submission and \
        classification testing.",
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
        description: "Created a Java Swing game where players navigate obstacles and avoid enemies \
        using A* search to locate the queen bee, developed iteratively with UML diagrams, Maven for \
        automation, and JaCoCo for full test coverage.",
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
        description: "Built and hosted an interactive web app visualizing over 1 million Vancouver crime \
        records, using Folium for map-based data display with filtering and caching to optimize \
        performance and ensure responsive user interactions.",
        technologies: [
            <Icon icon="skill-icons:python-dark" />,
            <Icon icon="skill-icons:html" />,
            <Icon icon="skill-icons:sqlite" />

        ],
        link: "https://github.com/marcolanfranchi/vancouver-crime-map",
    },
];

export default function Projects() {
    return (
        <div className="projects-container">
            <h1 style={{textAlign:'left'}}>my projects</h1>
            <p style={{textAlign:'left'}}>below are some of my recent projects. click the card to go to the project's github repository.</p>
            <div className="blank-space"> <p></p></div>
            <div className="blank-space"> <p></p></div>

            <div className="projects-grid">
                {projectData.map((project, index) => (
                    <a
                        href={project.link}
                        key={index}
                        className="project-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h3 className="project-title">{project.title}</h3>
                        <div className="project-tags">
                            {project.tags.map((tag, idx) => (
                                <span key={idx} className="project-tag">{tag}</span>
                            ))}
                        </div>
                        <p className="project-description">{project.description}</p>
                        <div className="project-technologies">
                            {project.technologies.map((icon, idx) => (
                                <span key={idx} className="tech-icon">{icon}</span>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
