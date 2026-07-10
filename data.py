portfolio_data = {
    "name": "Marco Lanfranchi",
    "email": "marcolanfranchi02 [at] gmail [dot] com",
    "github": "https://github.com/marcolanfranchi",
    "linkedin": "https://linkedin.com/in/marco--lanfranchi",
    "hero_description": "Incoming Data Scientist I at Mastercard. Experience with database engineering, software development, and data science.",

    # Education
    "education": [
        {
            "degree": "BSc in Data Science",
            "school": "Simon Fraser University",
            "date": "Sept 2022 - Jun 2026",
            "description": "Relevant courses include: Data Structures & Algorithms, Computational Data Science, Database Systems, Computer Systems, Intro to AI, Linear Algebra, Statistical Learning & Prediction, Linear Optimization, and Discrete Mathematics.",
            "location": "Burnaby, BC",
        },
        {
            "degree": "BA (transferred before completion)",
            "school": "University of British Columbia",
            "date": "Sept 2020 - Jul 2022",
            "description": "",
            "location": "Vancouver, BC",
        },
    ],

    # Work
    "jobs": [
        {
            "title": "Data Scientist I",
            "company": "Mastercard",
            "date": "Aug 2026",
            "description": "Post-grad role working on ML infrastructure.",
            "location": "Vancouver, BC",
        },
        {
            "title": "Database Engineer Intern",
            "company": "Samsung R&D Canada",
            "date": "Jan 2025 - Aug 2025",
            "description": "Cloud Engineering team.",
            "tech": ["MongoDB", "PostgreSQL", "MySQL", "Redshift", "Python", "Bash", "AWS", "Boto3", "Terraform", "Docker", "GitHub Actions"],
            "location": "Vancouver, BC",
        },
        {
            "title": "Data Analyst Intern",
            "company": "Nettwerk Music Group",
            "date": "Sept 2023 - May 2024",
            "description": "Developed dashboards, data pipelines, and applied data science techniques analyzing global streaming data for hundreds of artists as part of the Analytics team at an independent record label.",
            "tech": ["Snowflake", "SQL", "Tableau", "Python", "Scikit-learn", "Data Visualization", "Geospatial Analysis", "Regression Analysis"],
            "location": "Vancouver, BC",
        },
    ],

    # Open Source
    "opensource": [
        {
            "title": "Streamlit",
            "pr_link": "https://github.com/streamlit/streamlit/pull/12897",
            "date": "Oct 2025",
            "description": "Contributed to Streamlit, a popular open-source framework for building data and ML apps, by implementing tooltip support for st.badge().",
            "tech": ["Python", "TypeScript", "Streamlit", "GitHub", "Markdown"],
        },
    ],

    # Volunteering
    "volunteering": [
        {
            "title": "Volunteer Jr. Data Scientist",
            "company": "Industrio AI",
            "date": "Jan 2023 - Apr 2023",
            "description": "Contributed to the development of data applications for business clients, developing interactive visualizations with Python and JavaScript.",
            "tech": ["Azure", "PostgreSQL", "Python", "Plotly", "Streamlit", "TypeScript", "Vue.js", "Figma"],
            "location": "Vancouver, BC",
        },
        {
            "title": "Research Associate",
            "company": "Dr. Matt Lowe, UBC School of Economics",
            "date": "Jan 2021 - Aug 2021",
            "description": "Collaborated as an undergraduate research associate collecting data for one of Dr. Matt Lowe's research studies in behavioral economics.",
            "location": "Vancouver, BC",
        },
    ],

    # Projects
    "projects": [
        {
            "title": "lisa (Labeled Identification of Speech Audio)",
            "description": "ML model for speaker identification from audio clips. Pipeline includes data processing, audio cleaning, feature extraction, and model training. Also developed a demo interface that takes live audio input and identifies speakers.",
            "tech": ["Python", "Librosa", "FFmpeg", "pyannote.audio", "Scikit-learn", "Streamlit"],
            "github": "https://github.com/marcolanfranchi/lisa",
            "demo": "static/images/lisadiagramwhite.png",
        },
        {
            "title": "spotify-history",
            "description": "Automated background service that archives your Spotify listening history in an SQLite db and emails daily summaries.",
            "tech": ["Python", "SQLite3", "Spotify API", "Cron", "Shell Scripting"],
            "github": "https://github.com/marcolanfranchi/spotify-history",
            "demo": "static/images/pi.png",
        },
        {
            "title": "iammusic-template",
            "description": "Web app that lets users create custom versions of the 'I AM MUSIC' album cover. Reached over 250k visitors in one month and processed 500k+ submissions via a custom API and NoSQL cloud database.",
            "tech": ["React.js", "Next.js", "Firebase", "Vercel", "GCP"],
            "github": "https://github.com/marcolanfranchi/iammusic-template",
            "website": "https://iammusic-template.vercel.app",
            "demo": "static/images/iamt.png",
        },
        {
            "title": "written-digit-recognition",
            "description": "Interactive Streamlit app for handwritten digit classification, backed by a K-nearest neighbors model implemented from scratch in Python.",
            "tech": ["Python", "NumPy", "Plotly", "Streamlit"],
            "github": "https://github.com/marcolanfranchi/written-digit-recognition",
            "demo": "static/images/knn.png",
        },
        {
            "title": "aita-predictor",
            "description": "A machine learning model that classifies r/AmItheA-hole Reddit posts using an ensemble of classifiers built on vector embeddings and large-scale PySpark text processing.",
            "tech": ["Python", "PyTorch", "PySpark", "Scikit-learn", "Streamlit", "OpenAI API"],
            "github": "https://github.com/marcolanfranchi/aita-predictor",
            "demo": "static/images/aita2.png",
        },
    ],

    "blog_posts": [],

    # Zines
    "zines": [
        {
            "id": "ggggs",
            "title": "Cypherpunks: The Origins of Digital Resistance",
            "date": "Oct 2025",
            "description": "A zine about the origins of the cypherpunk movement. Made as part of SFU's PUB 448 course.",
            "images_folder": "zines/cypherpunksorigins-zine",
            "cover_image": "FRONT.png",
            "template": 1,
            "pages": ["FRONT.png", "INNERFRONT.png", "1.png", "2.png", "3.png", "4.png", "5.png", "BACK.png"],
        },
    ],

    # Concerts
    # folder name must match the S3 prefix under concerts/
    "concerts": [
        {"title": "Bar Italia at the Hollywood Theatre",              "date": "November 2025",  "location": "Vancouver, BC",   "folder": "baritalia-nov2025"},
        {"title": "Dream, Ivory & Wisp at the Pearl",                 "date": "September 2025", "location": "Vancouver, BC",   "folder": "wisp-sept2025"},
        {"title": "Montréal Jazz Festival",                           "date": "June 2025",      "location": "Montréal, QC",    "folder": "montrealjazz-jun2025"},
        {"title": "Nettspend & Xaviersobased at Showbox",             "date": "March 2025",     "location": "Seattle, WA",     "folder": "nett-mar2025"},
        {"title": "The Paper Kites at the Vogue Theatre",             "date": "March 2024",     "location": "Vancouver, BC",   "folder": "thepaperkites-mar2024"},
        {"title": "Shed Theory at Fortune Sound Club",                "date": "November 2023",  "location": "Vancouver, BC",   "folder": "shedtheory-nov2023"},
        {"title": "Yeat at the PNE Forum",                            "date": "April 2023",     "location": "Vancouver, BC",   "folder": "yeat-apr2023"},
        {"title": "Duwap Kaine & Bktherula at Madame Lou's",          "date": "March 2023",     "location": "Seattle, WA",     "folder": "duwapkaine-bktherula-mar2023"},
        {"title": "Lucki at the Vogue Theatre",                       "date": "November 2022",  "location": "Vancouver, BC",   "folder": "lucki-nov2022"},
        {"title": "Ken Carson & Destroy Lonely at Fortune Sound Club","date": "August 2022",    "location": "Vancouver, BC",   "folder": "kencarson-aug2022"},
        {"title": "Lil Tracy at the Rickshaw Theatre",                "date": "August 2022",    "location": "Vancouver, BC",   "folder": "liltracy-aug2022"},
        {"title": "A$AP Rocky at the PNE Amphitheatre (Summer Breakout Festival)", "date": "June 2019", "location": "Vancouver, BC", "folder": "asaprocky-june2019"},
        {"title": "Playboi Carti at Pacific Coliseum (Winter Breakout Festival)",  "date": "December 2018", "location": "Vancouver, BC", "folder": "carti-dec2018"},
        {"title": "Warhol.ss at Venue",                               "date": "February 2018",  "location": "Vancouver, BC",   "folder": "warholss-feb2018"},
        {"title": "Killy at Venue",                                   "date": "March 2018",     "location": "Vancouver, BC",   "folder": "killy-mar2018"},
        {"title": "A$AP Mob at the PNE Forum",                        "date": "October 2017",   "location": "Vancouver, BC",   "folder": "asapmob-oct2017"},
        {"title": "Future at Rogers Arena",                           "date": "June 2017",      "location": "Vancouver, BC",   "folder": "future-june2017"},
        {"title": "Drake at Rogers Arena",                            "date": "September 2016", "location": "Vancouver, BC",   "folder": "drake-sept2016"},
        {"title": "Tyler the Creator & A$AP Rocky at Rogers Arena",   "date": "November 2015",  "location": "Vancouver, BC",   "folder": "tyler-asap-nov2015"},
    ],

    # Photos
    "photos": [
        # Italy & France trip, June 2026
        {"filename": "0034_4.jpg", "folder": "amsterdam-2026",  "label": "Amsterdam, Netherlands", "lat": 52.3676,   "lon": 4.9041,   "datetime": "2026-06-12T12:32", "camera": "Pentax Espio 738"},
        {"filename": "0031_7.jpg", "folder": "milan-2026",      "label": "Milan, Italy",           "lat": 45.4642,   "lon": 9.19,     "datetime": "2026-06-15T12:00", "camera": "Pentax Espio 738"},
        {"filename": "0032_6.jpg", "folder": "milan-2026",      "label": "Milan, Italy",           "lat": 45.4642,   "lon": 9.19,     "datetime": "2026-06-15T12:00", "camera": "Pentax Espio 738"},
        {"filename": "0033_5.jpg", "folder": "bellagio-2026",   "label": "Bellagio, Italy",        "lat": 45.976756, "lon": 9.246776, "datetime": "2026-06-16T09:45", "camera": "Pentax Espio 738"},
        {"filename": "0025_13.jpg", "folder": "rome-2026",       "label": "Rome, Italy",            "lat": 41.9028,   "lon": 12.4964,  "datetime": "2026-06-19T14:05", "camera": "Pentax Espio 738"},
        {"filename": "0026_12.jpg", "folder": "rome-2026",       "label": "Rome, Italy",            "lat": 41.9028,   "lon": 12.4964,  "datetime": "2026-06-19T14:05", "camera": "Pentax Espio 738"},
        {"filename": "0028_10.jpg", "folder": "rome-2026",       "label": "Rome, Italy",            "lat": 41.9028,   "lon": 12.4964,  "datetime": "2026-06-19T14:05", "camera": "Pentax Espio 738"},
        {"filename": "0029_9.jpg", "folder": "rome-2026",       "label": "Rome, Italy",            "lat": 41.9028,   "lon": 12.4964,  "datetime": "2026-06-19T14:05", "camera": "Pentax Espio 738"},
        {"filename": "0022_16.jpg", "folder": "sorrento-2026",   "label": "Sorrento, Italy",        "lat": 40.6263,   "lon": 14.3757,  "datetime": "2026-06-20T18:50", "camera": "Pentax Espio 738"},
        {"filename": "0024_14.jpg", "folder": "sorrento-2026",   "label": "Sorrento, Italy",        "lat": 40.6263,   "lon": 14.3757,  "datetime": "2026-06-20T18:45", "camera": "Pentax Espio 738"},
        {"filename": "0008_30.jpg", "folder": "paris-2026",      "label": "Paris, France",          "lat": 48.8566,   "lon": 2.3522,   "datetime": "2026-06-25T15:30", "camera": "Pentax Espio 738"},
        {"filename": "0010_28.jpg", "folder": "paris-2026",      "label": "Paris, France",          "lat": 48.8566,   "lon": 2.3522,   "datetime": "2026-06-25T15:30", "camera": "Pentax Espio 738"},
        {"filename": "0012_26.jpg", "folder": "paris-2026",      "label": "Paris, France",          "lat": 48.8566,   "lon": 2.3522,   "datetime": "2026-06-25T15:30", "camera": "Pentax Espio 738"},
        {"filename": "0013_25.jpg", "folder": "paris-2026",      "label": "Paris, France",          "lat": 48.8566,   "lon": 2.3522,   "datetime": "2026-06-25T15:30", "camera": "Pentax Espio 738"},
        {"filename": "0014_24.jpg", "folder": "paris-2026",      "label": "Paris, France",          "lat": 48.8566,   "lon": 2.3522,   "datetime": "2026-06-25T15:30", "camera": "Pentax Espio 738"},
        {"filename": "0015_23.jpg", "folder": "paris-2026",      "label": "Paris, France",          "lat": 48.8566,   "lon": 2.3522,   "datetime": "2026-06-25T15:30", "camera": "Pentax Espio 738"},
        {"filename": "0018_20.jpg", "folder": "paris-2026",      "label": "Paris, France",          "lat": 48.8566,   "lon": 2.3522,   "datetime": "2026-06-25T15:30", "camera": "Pentax Espio 738"},
        {"filename": "0019_19.jpg", "folder": "paris-2026",      "label": "Paris, France",          "lat": 48.8566,   "lon": 2.3522,   "datetime": "2026-06-25T15:30", "camera": "Pentax Espio 738"},
        {"filename": "0020_18.jpg", "folder": "paris-2026",      "label": "Paris, France",          "lat": 48.8566,   "lon": 2.3522,   "datetime": "2026-06-25T15:30", "camera": "Pentax Espio 738"},
        {"filename": "0021_17.jpg", "folder": "paris-2026",      "label": "Paris, France",          "lat": 48.8566,   "lon": 2.3522,   "datetime": "2026-06-25T15:30", "camera": "Pentax Espio 738"},
    ],
}
