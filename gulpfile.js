const gulp = require("gulp");
const concat = require("gulp-concat");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const htmlmin = require("gulp-html-minifier-terser");
const uglify = require("gulp-uglify");

gulp.task("css", function () {
  const plugins = [autoprefixer(), cssnano()];
  return gulp
    .src("src/styles/*.css") // Ścieżka do plików CSS w katalogu 'dist/styles'
    .pipe(concat("main.compiled.css")) // Konkatenuj pliki CSS do jednego pliku
    .pipe(postcss(plugins)) // Przetwórz plik CSS za pomocą PostCSS
    .pipe(gulp.dest("dist/styles")); // Zapisz wynikowy plik w katalogu 'dist/styles'
});

gulp.task("html", function () {
  const options = {
    collapseWhitespace: true,
    removeComments: true,
    collapseInlineTagWhitespace: true,
    collapseInlineWhitespace: true,
    removeTagWhitespace: true,
    noNewlinesBeforeTagClose: true,
    removeEmptyAttributes: true,
    removeEmptyElements: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
  };
  return gulp
    .src("src/*.html")
    .pipe(concat("index.compiled.html"))
    .pipe(htmlmin(options))
    .pipe(gulp.dest("./"));
});

gulp.task("js", function () {
  return gulp
    .src("src/*.js")
    .pipe(concat("script.compiled.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist"));
});

gulp.task("build", gulp.series("css", "html", "js"));
