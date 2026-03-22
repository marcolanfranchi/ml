from flask import Flask, render_template, send_from_directory
from flask_frozen import Freezer
import os
import json

app = Flask(__name__)
app.config['FREEZER_RELATIVE_URLS'] = True

with open(os.path.join(app.root_path, 'static/data/data.json')) as f:
    portfolio_data = json.load(f)


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