from flask import Flask, render_template, send_from_directory, jsonify
from flask_frozen import Freezer
from dotenv import load_dotenv
from data import portfolio_data
import boto3
from botocore import UNSIGNED
from botocore.config import Config
import os
import time
from datetime import datetime
from concurrent.futures import ThreadPoolExecutor

load_dotenv()

app = Flask(__name__)
app.config['FREEZER_RELATIVE_URLS'] = True

S3_BUCKET   = os.getenv("S3_BUCKET", "marco-personal-site")
S3_REGION   = os.getenv("S3_REGION", "us-east-2")
API_URL     = os.getenv("API_URL", "")
S3_BASE_URL = f"https://{S3_BUCKET}.s3.{S3_REGION}.amazonaws.com"


@app.context_processor
def inject_globals():
    return {"api_url": API_URL, "s3_base_url": S3_BASE_URL}

# In-memory cache
_cache = {}
_CACHE_TTL = 600


def _cache_get(key):
    entry = _cache.get(key)
    if entry and time.time() - entry['ts'] < _CACHE_TTL:
        return entry['data']
    return None


def _cache_set(key, data):
    _cache[key] = {'data': data, 'ts': time.time()}


def get_concert_images(folder):
    cached = _cache_get(f'concert:{folder}')
    if cached is not None:
        return cached
    s3 = boto3.client("s3", region_name=S3_REGION, config=Config(signature_version=UNSIGNED))
    prefix = f"concerts/{folder}/"
    response = s3.list_objects_v2(Bucket=S3_BUCKET, Prefix=prefix)
    urls = sorted([
        f"{S3_BASE_URL}/{obj['Key']}"
        for obj in response.get("Contents", [])
        if not obj["Key"].endswith("/")
    ])
    _cache_set(f'concert:{folder}', urls)
    return urls


def get_all_photos():
    cached = _cache_get('photos')
    if cached is not None:
        return cached
    raw = portfolio_data.get("photos", [])
    photos = []
    for p in raw:
        photos.append({
            "url": f"{S3_BASE_URL}/photos/{p['folder']}/{p['filename']}",
            "filename": p["filename"],
            "label": p["label"],
            "lat": p["lat"],
            "lon": p["lon"],
            "datetime": p.get("datetime"),
            "camera": p.get("camera", "Unknown"),
        })
    def sort_key(p):
        try:
            return datetime.fromisoformat(p["datetime"])
        except (ValueError, TypeError):
            return datetime.min
    photos.sort(key=sort_key, reverse=True)
    for i, p in enumerate(photos):
        p["index"] = i
    _cache_set('photos', photos)
    return photos


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
    # image_urls fetched client-side via /api/concerts.json
    return render_template('concert_history.html', data={**portfolio_data, "concerts": concerts})

@app.route('/photos/')
def photos():
    return render_template('photos.html', data=portfolio_data)

# JSON API
# These endpoints are also frozen to build/api/*.json during `flask freeze`,
# so the static site can serve them without Lambda. Lambda serves live data.

@app.route('/api/photos.json')
def api_photos():
    resp = jsonify(get_all_photos())
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Cache-Control'] = 'public, max-age=300'
    return resp


@app.route('/api/concerts.json')
def api_concerts():
    concerts = list(portfolio_data.get("concerts", []))

    def fetch(concert):
        return {**concert, 'image_urls': get_concert_images(concert['folder'])}

    with ThreadPoolExecutor(max_workers=max(len(concerts), 1)) as ex:
        result = list(ex.map(fetch, concerts))

    resp = jsonify(result)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Cache-Control'] = 'public, max-age=300'
    return resp

@app.route('/images/<path:filename>')
def images(filename):
    return send_from_directory(os.path.join(app.root_path, 'images'), filename)

# Lambda entry point (no-op when mangum is not installed locally)
try:
    from mangum import Mangum
    handler = Mangum(app, lifespan="off")
except ImportError:
    pass

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

        @freezer.register_generator
        def photos():
            yield 'photos.html'

        freezer.freeze()
    else:
        app.run(debug=True, host='0.0.0.0', port=5000)
