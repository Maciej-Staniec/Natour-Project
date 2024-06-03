const gulp = require("gulp");
const concat = require("gulp-concat");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

gulp.task("css", function () {
  const plugins = [autoprefixer(), cssnano()];
  return gulp
    .src("src/styles/*.css") // Ścieżka do plików CSS w katalogu 'dist/styles'
    .pipe(concat("main.compiled.css")) // Konkatenuj pliki CSS do jednego pliku
    .pipe(postcss(plugins)) // Przetwórz plik CSS za pomocą PostCSS
    .pipe(gulp.dest("dist/styles")); // Zapisz wynikowy plik w katalogu 'dist/styles'
});
