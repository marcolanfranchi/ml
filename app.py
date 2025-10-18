from flask import Flask, render_template, send_from_directory
from flask_frozen import Freezer
import os

app = Flask(__name__)
app.config['FREEZER_RELATIVE_URLS'] = True

# Portfolio data
portfolio_data = {
    'name': 'Marco Lanfranchi',
    'email': 'marcolanfranchi02 [at] gmail [dot] com',
    'github': 'https://github.com/marcolanfranchi',
    'linkedin': 'https://linkedin.com/in/marco--lanfranchi',
    'hero_description': "4th year data science student at SFU with database, \
                            software development, and data science experience. Looking for opportunities in \
                                machine learning engineering.",
    'education': [
        {
            'degree': 'BSc in Data Science',
            'school': 'Simon Fraser University',
            'date': 'Sept 2022 - Apr 2026',
            'description': 'Relevant courses include: Data Structures & Algorithms, Computational Data Science, \
                Database Systems, Computer Systems, Intro to AI, Linear Algebra, Statistical Learning & Prediction, \
                    Linear Optimization, and Discrete Mathematics.'
        },
    ],
    
    'internships': [
        {
            'title': 'Database Engineer Intern',
            'company': 'Samsung R&D Canada',
            'date': 'Jan 2025 - Aug 2025',
            'description': "Developed and deployed a platform that automated database account management across \
                PostgreSQL, MySQL, Redshift, and MongoDB databases. Implemented all app functionality and \
                    introduced automated account lifecycles with password rotations and account expirations which \
                        eliminated over a quarter of DBA tickets.",
            'tech': ["MongoDB", "PostgreSQL", "MySQL", "Redshift", "Python", "Bash", "AWS", "Boto3", "Terraform", "Docker", "GitHub Actions"]
        },
        {
            'title': 'Data Analyst Intern',
            'company': 'Nettwerk Music Group',
            'date': 'Sept 2023 - May 2024',
            'description': "Applied statistical analysis and machine learning techniques to streaming and social media data \
                for 100s of artists under an independent label. Developed dashboards for geospatial audience streaming \
                    analytics, fraudulent stream detection, and pipelines that transformed raw streaming data into reports \
                        and visualizations.",
            'tech': ["Snowflake", "SQL", "Tableau", "Python", "Scikit-learn", "Data Visualization", "Geospatial Analysis", 
                     "Regression Analysis"]
        }
    ],
    'volunteering': [
        {
            'title': 'Volunteer Jr. Data Scientist',
            'company': 'Industrio AI',
            'date': 'Jan 2023 - Apr 2023',
            'description': "Worked with a small team of data scientists and developers to build full-stack applications \
                for fuel cell engineering clients, contributing front-end features and interactive visualizations using \
                    Python, Streamlit, Plotly, TypeScript, and Vue.js.",
            'tech': ["Azure", "PostgreSQL", "Python", "Plotly", "Streamlit", "TypeScript", "Vue.js", "Figma"]
        },
        {
            'title': 'Research Associate',
            'company': 'Dr. Matt Lowe, UBC School of Economics',
            'date': 'Jan 2021 - Aug 2021',
            'description': "Collaborated as an undergraduate research associate collecting data for Dr. Matt Lowe’s \
                research project: 'Do Virtue Signals Signal Virtue?'."
        }
    ],
    
    'projects': [
        {
            'title': 'LISA (Labeled Identification of Speaker\'s Audio Model)',
            'description': 'End-to-end machine learning project that identifies who\'s speaking from audio clips. \
                Built a data pipeline with speaker diarization, audio preprocessing, and feature extraction. \
                Working on model training, evaluation, and a real-time speaker identification demo interface.',
            'tech': ["Python", "Librosa", "FFmpeg", "pyannote.audio", "Scikit-learn"],
            'github': 'https://github.com/marcolanfranchi/lisa',
            'demo': 'static/images/lisadiagramwhite.png',
        },
        {
            'title': 'spotify-history',
            'description': 'Background service that archives your Spotify listening history into a local SQLite \
                database and sends you daily listening summaries by email. Designed for easy set-up and to run indefinitely \
                    (I\'m running it from an old Raspberry Pi).',
            'tech': ["Python", "SQLite3", "Spotify API", "Cron", "Shell Scripting"],
            'github': 'https://github.com/marcolanfranchi/spotify-history',
            'demo': 'static/images/pi.png',
        },
        {
            'title': 'iammusic-template',
            'description': 'Web app that lets users generate custom versions of a popular album cover. \
                At its peak, it reached over 200k visitors in a single month and has processed over 500k submissions \
                    through a custom API and NoSQL cloud database. Still receives ~1k daily visitors to date.',
            'tech': ["React.js", "Next.js", "Firebase", "Vercel", "GCP"],
            'github': 'https://github.com/marcolanfranchi/iammusic-template',
            'website': 'https://iammusic-template.vercel.app',
            'demo': 'static/images/iamt.png',
        },
        {
            'title': 'written-digit-recognition',
            'description': 'Interactive app for handwritten digit classification, built with a custom K-nearest neighbors \
                implementation from scratch in Python.',
            'tech': ["Python", "NumPy", "Plotly", "Streamlit"],
            'github': 'https://github.com/marcolanfranchi/written-digit-recognition',
            'demo': 'static/images/knn.png',
        },
        {
            'title': 'aita-predictor',
            'description': 'A machine learning model that classifies r/AmItheA-hole Reddit posts using an ensemble of \
                classifiers built on vector embeddings and large-scale PySpark text processing. Includes a Streamlit UI \
                    for interactive exploration and testing.',
            'tech': ["Python", "PyTorch", "PySpark", "Scikit-learn", "Streamlit", "OpenAI API"],
            'github': 'https://github.com/marcolanfranchi/aita-predictor',
            'demo': 'static/images/aita2.png',
        },
    ],
    
    'blog_posts': [
        # {
        #     'id': 'getting-started-with-machine-learning',
        #     'title': 'Getting Started with Machine Learning',
        #     'date': '2025-01-15',
        #     'excerpt': 'A beginner-friendly guide to understanding the fundamentals of machine learning and how to get started with your first project.',
        #     'tags': ['Machine Learning', 'Beginner', 'Python']
        # },
    ],
    
    'zines': [
        {
            'id': 'cypherpunks-origins',
            'title': 'Cypherpunks: The Origins of Digital Resistance',
            'date': 'Oct 2025',
            'description': 'A zine about the origins of the cypherpunk movement. Made as part of SFU\'s PUB 448 course.',
            'images_folder': 'cypherpunksorigins-zine',  # This will be used as /static/pages/
            'cover_image': 'FRONT.png',
            'template': 1,  # EZM template number (1-8)
            'pages': ['FRONT.png', 'INNERFRONT.png', '1.png', '2.png', '3.png', '4.png', '5.png', 'BACK.png']
        }
    ]
}

@app.route('/')
def index():
    return render_template('index.html', data=portfolio_data)

@app.route('/zines')
def zines():
    return render_template('zines.html', data=portfolio_data)

# @app.route('/blog')
# def blog():
#     return render_template('blog.html', data=portfolio_data)

# @app.route('/blog/<post_id>')
# def blog_post(post_id):
#     post = next((p for p in portfolio_data['blog_posts'] if p['id'] == post_id), None)
#     if post:
#         return render_template('blog_post.html', post=post, data=portfolio_data)
#     return "Blog post not found", 404

# Serve images from the project-level images directory
@app.route('/images/<path:filename>')
def images(filename):
    return send_from_directory(os.path.join(app.root_path, 'images'), filename)

if __name__ == '__main__':
    if os.environ.get('FREEZE') == 'true':
        freezer = Freezer(app)
        freezer.freeze()
    else:
        app.run(debug=True, host='0.0.0.0', port=5000) 