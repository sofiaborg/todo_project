var gulp = require("gulp");

var sass = require("gulp-sass")(require("sass"));

var minify = require("gulp-clean-css");

gulp.task("compile", function () {
  return gulp
    .src("scss/main.scss")
    .pipe(sass())
    .pipe(minify())
    .pipe(gulp.dest("css"));
});

gulp.task("watch-scss", function () {
  gulp.watch("scss/main.scss", gulp.series("compile"));
});

gulp.task("default", gulp.series("compile", "watch-scss"), function () {});
