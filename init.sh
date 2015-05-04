#!/bin/bash

mkdir -p electron-sample/app
mkdir -p electron-sample/browser/scripts/splash
cd electron-sample
touch Gulpfile.js
touch app/index.es6.js
touch browser/index.html
touch browser/scripts/splash/app.js
touch browser/scripts/splash/controller.js

cd electron-sample

echo "project structure created.. installing global node modules..."
npm i gulp electron-prebuilt jspm -g

echo "global dependencies installed... installing local dependencies"
npm i gulp-babel gulp-rename gulp-run --save-dev

echo "dependencies installed... update your package.json"
echo "and run jspm install"


