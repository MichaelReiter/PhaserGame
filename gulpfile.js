// Generated by CoffeeScript 1.10.0

/* The following gulpfile compiles coffeescript and places it in the build folder along with minified game assets. */

/* Gulp and processing plugins. */
var changed, coffee, coffeeDst, coffeeSrc, concat, fontsDst, fontsSrc, gulp, gutil, htmlDst, htmlSrc, imagemin, imgDst, imgSrc, libDst, libSrc, minifyHTML, sass, styleDst, styleSrc;

gulp = require('gulp');

gutil = require('gulp-util');

coffee = require('gulp-coffee');

concat = require('gulp-concat');

sass = require('gulp-sass');

changed = require('gulp-changed');

imagemin = require('gulp-imagemin');

minifyHTML = require('gulp-minify-html');


/* Source and build destination directories for files. */

coffeeSrc = ['./src/script/*State.coffee', './src/script/main.coffee', './src/script/Powerup.coffee', './src/script/*.coffee'];

coffeeDst = './build/script';

libSrc = './src/lib/*.js';

libDst = './build/lib';

imgSrc = './src/img/*';

imgDst = './build/img';

fontsSrc = './src/fonts/*';

fontsDst = './build/fonts';

htmlSrc = './src/*.html';

htmlDst = './build/';

styleSrc = './src/styles/*.scss';

styleDst = './build/css';

gulp.task('coffee', function() {
  gulp.src(coffeeSrc).pipe(concat('main.coffee')).pipe(coffee({
    bare: true
  }).on('error', gutil.log)).pipe(gulp.dest(coffeeDst));
});

gulp.task('lib', function() {
  gulp.src(libSrc).pipe(gulp.dest(libDst));
});

gulp.task('img', function() {
  gulp.src(imgSrc).pipe(gulp.dest(imgDst));
});

gulp.task('fonts', function() {
  gulp.src(fontsSrc).pipe(gulp.dest(fontsDst));
});

gulp.task('html', function() {
  gulp.src(htmlSrc).pipe(minifyHTML()).pipe(gulp.dest(htmlDst));
  gulp.src('./src/favicon/*').pipe(gulp.dest('./build'));
});

gulp.task('style', function() {
  gulp.src(styleSrc).pipe(sass()).pipe(gulp.dest(styleDst));
});

gulp.task('default', ['coffee', 'lib', 'img', 'html', 'style', 'fonts'], function() {
  gulp.watch(coffeeSrc, ['coffee']);
  gulp.watch(imgSrc, ['img']);
  gulp.watch(htmlSrc, ['html']);
  gulp.watch(styleSrc, ['style']);
  gulp.watch(styleSrc, ['fonts']);
});
