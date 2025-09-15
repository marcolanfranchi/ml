#!/usr/bin/env python3
"""
Build script for generating static portfolio site.
This script uses Frozen-Flask to generate static HTML files.
"""

import os
import shutil
from flask_frozen import Freezer
from app import app

def build_static_site():
    """Generate static HTML files from Flask app."""
    print("Building static portfolio site...")
    
    # Configure Flask for static generation
    app.config['FREEZER_RELATIVE_URLS'] = True
    app.config['FREEZER_DESTINATION'] = 'build'
    
    # Create freezer instance
    freezer = Freezer(app)
    
    # Generate static files
    freezer.freeze()
    
    print("Static site generated successfully!")
    print("Files are available in the 'build' directory")
    
    # List generated files
    if os.path.exists('build'):
        print("\nGenerated files:")
        for root, dirs, files in os.walk('build'):
            level = root.replace('build', '').count(os.sep)
            indent = ' ' * 2 * level
            print(f"{indent}{os.path.basename(root)}/")
            subindent = ' ' * 2 * (level + 1)
            for file in files:
                print(f"{subindent}{file}")

def clean_build():
    """Remove build directory."""
    if os.path.exists('build'):
        shutil.rmtree('build')
        print("Build directory cleaned.")

if __name__ == '__main__':
    import sys
    
    if len(sys.argv) > 1 and sys.argv[1] == 'clean':
        clean_build()
    else:
        build_static_site() 