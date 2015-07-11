mkdir electron-sample\app
mkdir electron-sample\browser\scripts\splash
cd electron-sample
type NUL > Gulpfile.js
type NUL > app\index.es6.js
type NUL > browser/index.html
type NUL > browser/scripts/splash/app.js
type NUL > browser/scripts/splash/controller.js

echo "project structure created.. installing global node modules..."
npm i gulp electron-prebuilt jspm -g

echo "initializing npm package"
npm init

echo "global dependencies installed... installing local dependencies"
npm i gulp-babel gulp-rename gulp-run --save-dev

echo "dependencies installed..."
echo "run jspm install"
