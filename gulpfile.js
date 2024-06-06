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
    .src("src/styles/*.css") // Path to CSS files in the 'dist/styles' directory.
    .pipe(concat("main.compiled.css")) // Concatenate CSS files into one file.
    .pipe(postcss(plugins)) // Process the CSS file using PostCSS.
    .pipe(gulp.dest("dist/styles")); // Save the outcome file in the 'dist/styles' directory
});

gulp.task("js", function () {
  return gulp
    .src("src/*.js")
    .pipe(concat("script.compiled.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist"));
});

// Run 2 tasks subsequently
gulp.task("build", gulp.series("css", "js"));
