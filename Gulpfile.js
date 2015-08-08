var gulp = require('gulp'),
  babel = require('gulp-babel'),
  runSequence = require('run-sequence'),
  rename = require('gulp-rename'),
  electron  = require('gulp-atom-electron'),
  del = require('del');

gulp.task('transpile:app', function() {
  return gulp.src('app/index.es6.js')
    .pipe(babel())
    .pipe(rename('index.js'))
    .pipe(gulp.dest('app'));
});


gulp.task('clean', function(){
    return del('package', {force: true});
});

gulp.task('copy:app', ['clean'], function(){
    return gulp.src(['app/**/*', 'browser/**/*', 'package.json'], {base: '.'})
        .pipe(gulp.dest('package'));
});


gulp.task('build', function() {
  return gulp.src('package/**')
        .pipe(electron({ 
          version: '0.30.3', 
          // build for OSX
          platform: 'darwin' }))
        .pipe(electron.zfsdest('dist/es6-ng-electron.zip'));
});

gulp.task('default', function(){
    return runSequence('clean', 'transpile:app', 'copy:app','build');
  });
