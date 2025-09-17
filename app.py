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
    'hero_description': "4th year Data Science student at SFU. I've done work in database management, software development, and data science.",
    'education': [
        {
            'degree': 'BSc in Data Science',
            'school': 'Simon Fraser University',
            'year': 'Sept 2022 - Apr 2026',
            'description': ''
        },
    ],
    
    'internships': [
        {
            'title': 'Database Engineer Intern',
            'company': 'Samsung R&D Canada',
            'duration': 'Jan 2025 - Aug 2025',
            'description': "Developed and deployed a platform that automated database account management across PostgreSQL, MySQL, Redshift, and MongoDB databases. Implemented all app functionality and introduced automated account lifecycles with password rotations and account expirations which eliminated 25%+ of DBA tickets for the company."
        },
        {
            'title': 'Data Analyst Intern',
            'company': 'Nettwerk Music Group',
            'duration': 'Sept 2023 - May 2024',
            'description': "Applied statistical analysis and machine learning techniques to streaming and social media data for 100s of artists under an independent label. Developed dashboards for geospatial audience streaming analytics, fraudulent stream detection, and pipelines that transformed raw streaming data into reports and visualizations."
        }
    ],
    'volunteering': [
        {
            'title': 'Volunteer Jr. Data Scientist',
            'company': 'Industrio AI',
            'duration': 'Jan 2023 - Apr 2023',
            'description': "Worked with a small team of data scientists and developers to build full-stack applications for fuel cell engineering clients, contributing front-end features and interactive visualizations using Python, Streamlit, Plotly, TypeScript, and Vue.js."
        },
        {
            'title': 'Research Associate',
            'company': 'Dr. Matt Lowe, UBC School of Economics',
            'duration': 'Jan 2021 - Aug 2021',
            'description': "Collaborated as an undergraduate research associate collecting data for Dr. Matt Lowe’s research project: 'Do Virtue Signals Signal Virtue?'."
        }
    ],
    
    # 'skills': [
    #     'Python', 'Machine Learning', 'Data Analysis', 'SQL', 'Pandas', 'NumPy', 'Scikit-learn',
    #     'Data Visualization', 'Git', 'Docker', 'AWS', 'Jupyter Notebooks'
    # ],
    
    'projects': [
        {
            'title': 'iammusic-template',
            'description': 'Web app that lets users generate custom versions of a popular artist’s album cover. At its peak, it drew over 200k visitors in a single month and has accumulated nearly 500k submissions stored in its NoSQL cloud database. The app spread widely across Instagram memes and still receives ~1k daily visitors.',
            'tech': ["React.js", "Firebase", "Vercel"],
            'github': 'https://github.com/marcolanfranchi/iammusic-template',
            'website': 'https://iammusic-template.vercel.app',
            'demo': 'static/images/iamt.png'
        },
        {
            'title': 'digit-recognition-from-scratch',
            'description': 'An interactive app for real-time handwritten digit classification, powered by a custom K-nearest neighbors implementation in Python.',
            'tech': ["K-nearest neighbors", "Python", "NumPy", "Streamlit"],
            'github': 'https://github.com/marcolanfranchi/digit-recognition-from-scratch',
            'demo': 'static/images/knn.png'
        },
        {
            'title': 'aita-predictor',
            'description': 'A machine learning model that classifies r/AmItheA-hole Reddit posts using an ensemble of classifiers built on vector embeddings and large-scale PySpark text processing. Presented with a Streamlit demo UI for interactive exploration.',
            'tech': ["NLP", "PySpark", "Scikit-learn", "Streamlit"],
            'github': 'https://github.com/marcolanfranchi/aita-predictor',
            'demo': 'static/images/aita.png'
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
    ]
}

@app.route('/')
def index():
    return render_template('index.html', data=portfolio_data)

@app.route('/blog')
def blog():
    return render_template('blog.html', data=portfolio_data)

@app.route('/blog/<post_id>')
def blog_post(post_id):
    post = next((p for p in portfolio_data['blog_posts'] if p['id'] == post_id), None)
    if post:
        return render_template('blog_post.html', post=post, data=portfolio_data)
    return "Blog post not found", 404

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