const gulp = require("gulp");
const minify = require("gulp-minify");
const htmlmin = require("gulp-htmlmin");
const cleanCSS = require("gulp-clean-css");
const clean = require("gulp-clean");
const svgmin = require("gulp-svgmin");

// compres index html
gulp.task("compress-html", () => {
  return gulp
    .src(`index.html`)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist"));
});

// pindah logo browser
gulp.task("move-favicon", () => {
  return gulp.src("public/favicon.svg").pipe(gulp.dest("dist/public"));
});

// pindah readme
gulp.task("move-readme", () => {
  return gulp.src("README.md").pipe(gulp.dest("dist"));
});

// remove image to dist(minify) folder
gulp.task("images", () => {
  return gulp.src("public/images/*").pipe(gulp.dest("dist/public/images"));
});
gulp.task("images-full", () => {
  return gulp.src("public/images/**/*").pipe(gulp.dest("dist/public/images"));
});

// compress src js files
gulp.task("compress-components", function () {
  return gulp
    .src([`public/src/components/*.js`])
    .pipe(minify())
    .pipe(gulp.dest("dist/public/src/components"));
});

// compress src html file
gulp.task("compress-html-pages", () => {
  return gulp
    .src(`public/src/pages/*.html`)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist/public/src/pages"));
});

// compress static js files
gulp.task("compress-static", function async() {
  return gulp
    .src([`public/static/js/*.js`])
    .pipe(minify())
    .pipe(gulp.dest("dist/public/static/js"));
});

// compress static css file
gulp.task("compress-css", () => {
  return gulp
    .src(`public/static/css/*.css`)
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("dist/public/static/css"));
});

// menghapus folder dist
gulp.task("clean", function () {
  return gulp
    .src("dist", {
      read: false,
      allowEmpty: true,
    })
    .pipe(clean());
});

/**
 * mengurutkan semua task diatas menjadi satu command line
 * 1. Delete dist folder
 * 2. Move images file to dist folder
 * 3. minify public/component files
 * 4. minify public/src files
 * */

gulp.task(
  "remove",
  gulp.series(
    "clean",
    "compress-html",
    "move-favicon",
    "move-readme",
    "images",
    "images-full",
    "compress-components",
    "compress-html-pages",
    "compress-static",
    "compress-css"
  )
);
