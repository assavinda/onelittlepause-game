#!/usr/bin/env bash

# Exit on error
set -e

# Build the project
npm run build

# Navigate to dist folder
cd dist

# Initialize a new Git repo and push to gh-pages branch
git init
git add -A
git commit -m "Deploy to GitHub Pages"
git branch -M gh-pages
git remote add origin https://github.com/assavinda/onelittlepause-game.git
git push -f origin gh-pages

# Go back to root
cd -
