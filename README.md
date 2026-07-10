Personal website built with Python/Flask, HTML/CSS, and deployed as a static site via Frozen-Flask. Images and other data stored in AWS S3.

## Local development

```bash
pip install -r requirements.txt
python3 app.py
```

- Visit http://localhost:5000. 
- API endpoints (`/api/photos.json`, `/api/concerts.json`) are served by Flask directly.

## Building the static site

```bash
python3 build.py
```

Generates the full static site in `build/`.

## API endpoints

These are served by Flask locally and pre-generated as static files on GitHub Pages.

- `GET /api/photos.json`: All photo metadata (URL, location, datetime, camera), sorted by date
- `GET /api/concerts.json`: All concerts with image URL arrays

S3 listing is parallelised across folders and cached in memory for 10 minutes during local development.

## Environment variables

Create a `.env` file and fill in your values:

```
S3_BUCKET=your-bucket-name
S3_REGION=your-region
```

For GitHub Actions, set `S3_BUCKET` and `S3_REGION` as repository secrets.

## Deployment

Deployment is handled by GitHub Actions on push to `master`:

- Installs dependencies
- Runs `python build.py` to generate the static site (including the API JSON files)
- Force-pushes the `build/` directory to `marcolanfranchi.github.io`
