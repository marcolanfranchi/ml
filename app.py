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
    'hero_description': "4th year data science student at SFU with experience in databases, \
                            software development, and data science. Looking for new-grad \
                            opportunities in data science/machine learning operations.",
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
            'description': "Cloud Engineering team.",
            'tech': ["MongoDB", "PostgreSQL", "MySQL", "Redshift", "Python", "Bash", "AWS", "Boto3", 
                     "Terraform", "Docker", "GitHub Actions"]
        },
        {
            'title': 'Data Analyst Intern',
            'company': 'Nettwerk Music Group',
            'date': 'Sept 2023 - May 2024',
            'description': "Developed dashboards, data pipelines, and applied data science \
                techniques analyzing global streaming data for hundreds of artists as part of the \
                    Analytics team at an independent music label.",
            'tech': ["Snowflake", "SQL", "Tableau", "Python", "Scikit-learn", "Data Visualization", 
                     "Geospatial Analysis", "Regression Analysis"]
        }
    ],
    'opensource': [
        {
            'title': 'Streamlit',
            'pr_link': 'https://github.com/streamlit/streamlit/pull/12897',
            'date': 'Oct 2025',
            'description': "Contributed to Streamlit, a popular open-source framework for \
                building data and ML apps, by implementing tooltip support for st.badge().",
            'tech': ["Python", "TypeScript", "Streamlit", "GitHub", "Markdown"]
        },
    ],

    'volunteering': [
        {
            'title': 'Volunteer Jr. Data Scientist',
            'company': 'Industrio AI',
            'date': 'Jan 2023 - Apr 2023',
            'description': "Contributed to the development of data applications for business clients, \
                developing interactive visualizations with Python and JavaScript.",
            'tech': ["Azure", "PostgreSQL", "Python", "Plotly", "Streamlit", "TypeScript", "Vue.js", "Figma"]
        },
        {
            'title': 'Research Associate',
            'company': 'Dr. Matt Lowe, UBC School of Economics',
            'date': 'Jan 2021 - Aug 2021',
            'description': "Collaborated as an undergraduate research associate collecting data for one of \
                Dr. Matt Lowe’s research studies in behavioral economics.",
        }
    ],
    
    'projects': [
        {
            'title': 'LISA (Labeled Identification of Speaker\'s Audio Model)',
            'description': 'ML model for speaker identification from audio clips. Pipeline includes \
                data processing, audio cleaning, feature extraction, and model training. Also \
                    developed a demo interface that takes live audio input to identify speakers.',
            'tech': ["Python", "Librosa", "FFmpeg", "pyannote.audio", "Scikit-learn", "Streamlit"],
            'github': 'https://github.com/marcolanfranchi/lisa',
            'demo': 'static/images/lisadiagramwhite.png',
        },
        {
            'title': 'spotify-history',
            'description': 'Automated background service that archives your Spotify listening history in an SQLite db and \
                emails daily summaries.',
            'tech': ["Python", "SQLite3", "Spotify API", "Cron", "Shell Scripting"],
            'github': 'https://github.com/marcolanfranchi/spotify-history',
            'demo': 'static/images/pi.png',
        },
        {
            'title': 'iammusic-template',
            'description': "Web app that lets users create custom versions of the 'I am Music' album cover. Reached over \
                200k visitors and processed 500k+ submissions via a custom API and NoSQL cloud database.",
            'tech': ["React.js", "Next.js", "Firebase", "Vercel", "GCP"],
            'github': 'https://github.com/marcolanfranchi/iammusic-template',
            'website': 'https://iammusic-template.vercel.app',
            'demo': 'static/images/iamt.png',
        },
        {
            'title': 'written-digit-recognition',
            'description': 'Interactive app for handwritten digit classification, backed by a K-nearest neighbors \
                model implemented from scratch in Python.',
            'tech': ["Python", "NumPy", "Plotly", "Streamlit"],
            'github': 'https://github.com/marcolanfranchi/written-digit-recognition',
            'demo': 'static/images/knn.png',
        },
        {
            'title': 'aita-predictor',
            'description': 'A machine learning model that classifies r/AmItheA-hole Reddit posts using an ensemble of \
                classifiers built on vector embeddings and large-scale PySpark text processing.',
            'tech': ["Python", "PyTorch", "PySpark", "Scikit-learn", "Streamlit", "OpenAI API"],
            'github': 'https://github.com/marcolanfranchi/aita-predictor',
            'demo': 'static/images/aita2.png',
        },
    ],
    
    'blog_posts': [
        # {
        #     'id': 'getting-started-with-machine-learning',
        #     'title': 'test',
        #     'date': '2025-01-15',
        #     'excerpt': 'test test test',
        #     'tags': ['Machine Learning']
        # },
    ],
    
    'zines': [
        {
            'id': 'ggggs',
            'title': 'Cypherpunks: The Origins of Digital Resistance',
            'date': 'Oct 2025',
            'description': 'A zine about the origins of the cypherpunk movement. Made as part of SFU\'s PUB 448 course.',
            'images_folder': 'zines/cypherpunksorigins-zine', # Folder in static/images/
            'cover_image': 'FRONT.png',
            'template': 1,  # EZM template number (1-8)
            'pages': ['FRONT.png', 'INNERFRONT.png', '1.png', '2.png', '3.png', '4.png', '5.png', 'BACK.png']
        }
    ],

    'concerts': [

        {
            'title': "Bar Italia at the Hollywood Theatre",
            'date': 'November 2025',
            'location': 'Vancouver, BC',
            'folder': 'concerts/baritalia-nov2025', # Folder in static/images/
            'images': ['1.png']
        },
        {
            'title': "Dream, Ivory & Wisp at the Pearl",
            'date': 'September 2025',
            'location': 'Vancouver, BC',
            'folder': 'concerts/wisp-sept2025', # Folder in static/images/
            'images': ['1.jpg', '2.png']
        },
        {
            'title': "Montréal Jazz Festival",
            'date': 'June 2025',
            'location': 'Montréal, QC',
            'folder': 'concerts/montrealjazz-jun2025', # Folder in static/images/
            'images': ['1.jpg']
        },
        {
            'title': "Nettspend & Xaviersobased at Showbox",
            'date': 'March 2025',
            'location': 'Seattle, WA',
            'folder': 'concerts/nett-mar2025', # Folder in static/images/
            'images': ['1.jpg']
        },
        {
            'title': "The Paper Kites at the Vogue Theatre",
            'date': 'March 2024',
            'location': 'Vancouver, BC',
            'folder': 'concerts/thepaperkites-mar2024', # Folder in static/images/
            'images': ['1.png']
        },
        {
            'title': "Shed Theory at Fortune Sound Club",
            'date': 'November 2023',
            'location': 'Vancouver, BC',
            'folder': 'concerts/shedtheory-nov2023', # Folder in static/images/
            'images': ['1.jpg', '2.jpg']
        },
        {
            'title': "Yeat at the PNE Forum",
            'date': 'April 2023',
            'location': 'Vancouver, BC',
            'folder': 'concerts/yeat-apr2023', # Folder in static/images/
            'images': ['1.jpg']
        },
        {
            'title': "Duwap Kaine & Bktherula at Madame Lou's",
            'date': 'March 2023',
            'location': 'Seattle, WA',
            'folder': 'concerts/duwapkaine-bktherula-mar2023', # Folder in static/images/
            'images': ['1.jpg', '2.jpg']
        },
        {
            'title': "Lucki at the Vogue Theatre",
            'date': 'November 2022',
            'location': 'Vancouver, BC',
            'folder': 'concerts/lucki-nov2022', # Folder in static/images/
            'images': ['1.jpg']
        },
        {
            'title': "Ken Carson & Destroy Lonely at Fortune Sound Club",
            'date': 'August 2022',
            'location': 'Vancouver, BC',
            'folder': 'concerts/kencarson-aug2022', # Folder in static/images/
            'images': ['1.jpg', '2.jpg']
        },
        {
            'title': "Lil Tracy at the Rickshaw Theatre",
            'date': 'August 2022',
            'location': 'Vancouver, BC',
            'folder': 'concerts/liltracy-aug2022', # Folder in static/images/
            'images': ['1.png']
        },
        {
            'title': 'A$AP Rocky at the PNE Amphitheatre (Summer Breakout Festival)',
            'date': 'June 2019',
            'location': 'Vancouver, BC',
            'folder': 'concerts/asaprocky-june2019', # Folder in static/images/
            'images': ['1.png']
        },
        {
            'title': 'Playboi Carti at Pacific Coliseum (Winter Breakout Festival)',
            'date': 'December 2018',
            'location': 'Vancouver, BC',
            'folder': 'concerts/carti-dec2018', # Folder in static/images/
            'images': ['1.png']
        },
        {
            'title': 'Warhol.ss at Venue',
            'date': 'February 2018',
            'location': 'Vancouver, BC',
            'folder': 'concerts/warholss-feb2018', # Folder in static/images/
            'images': ['1.png']
        },
        {
            'title': 'Killy at Venue',
            'date': 'March 2018',
            'location': 'Vancouver, BC',
            'folder': 'concerts/killy-mar2018', # Folder in static/images/
            'images': ['1.png']
        },
        {
            'title': 'A$AP Mob at the PNE Forum',
            'date': 'October 2017',
            'location': 'Vancouver, BC',
            'folder': 'concerts/asapmob-oct2017', # Folder in static/images/
            'images': ['1.png']
        },
        {
            'title': 'Future at Rogers Arena',
            'date': 'June 2017',
            'location': 'Vancouver, BC',
            'folder': 'concerts/future-june2017', # Folder in static/images/
            'images': ['1.png']
        },
        {
            'title': 'Drake at Rogers Arena',
            'date': 'September 2016',
            'location': 'Vancouver, BC',
            'folder': 'concerts/drake-sept2016', # Folder in static/images/
            'images': ['1.png']
        },
        {
            'title': 'Tyler the Creator & A$AP Rocky at Rogers Arena',
            'date': 'November 2015',
            'location': 'Vancouver, BC',
            'folder': 'concerts/tyler-asap-nov2015', # Folder in static/images/
            'images': ['1.png', '2.png']
        },
    ],
}

@app.route('/')
def index():
    return render_template('index.html', data=portfolio_data)

@app.route('/zines/')
def zines():
    return render_template('zines.html', data=portfolio_data)

@app.route('/listening-history/')
def listening_history():
    return render_template('listening_history.html')

@app.route('/concert-history/')
def concert_history():
    return render_template('concert_history.html', data=portfolio_data)

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
        # Explicitly register all routes for static generation
        @freezer.register_generator
        def zines():
            yield 'zines.html'
        
        @freezer.register_generator
        def listening_history():
            yield 'listening_history.html'

        @freezer.register_generator
        def concert_history():
            yield 'concert_history.html'

        freezer.freeze()
    else:
        app.run(debug=True, host='0.0.0.0', port=5000) 