from flask import Flask, render_template, send_from_directory
from flask_frozen import Freezer
import boto3
from botocore import UNSIGNED
from botocore.config import Config
import os
import json

app = Flask(__name__)
app.config['FREEZER_RELATIVE_URLS'] = True

S3_BUCKET = "marco-personal-site"
S3_REGION = "us-east-2"
S3_BASE_URL = f"https://{S3_BUCKET}.s3.{S3_REGION}.amazonaws.com"

with open(os.path.join(app.root_path, 'static/data/data.json')) as f:
    portfolio_data = json.load(f)


def get_concert_images(folder):
    """List all image URLs in a given S3 concert folder, anonymously."""
    s3 = boto3.client("s3", region_name=S3_REGION, config=Config(signature_version=UNSIGNED))
    prefix = f"concerts/{folder}/"
    response = s3.list_objects_v2(Bucket=S3_BUCKET, Prefix=prefix)
    urls = []
    for obj in response.get("Contents", []):
        key = obj["Key"]
        if not key.endswith("/"):  # skip the folder placeholder itself
            urls.append(f"{S3_BASE_URL}/{key}")
    return sorted(urls)


@app.route('/')
def index():
    return render_template('index.html', data=portfolio_data)

# @app.route('/zines/')
# def zines():
#     return render_template('zines.html', data=portfolio_data)

@app.route('/listening-history/')
def listening_history():
    return render_template('listening_history.html')

@app.route('/concert-history/')
def concert_history():
    concerts = portfolio_data.get("concerts", [])
    for concert in concerts:
        concert["image_urls"] = get_concert_images(concert["folder"])
    return render_template('concert_history.html', data={**portfolio_data, "concerts": concerts})

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

        # @freezer.register_generator
        # def zines():
        #     yield 'zines.html'

        @freezer.register_generator
        def listening_history():
            yield 'listening_history.html'

        @freezer.register_generator
        def concert_history():
            yield 'concert_history.html'

        freezer.freeze()
    else:
        app.run(debug=True, host='0.0.0.0', port=5000)