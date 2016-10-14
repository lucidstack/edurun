"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function () {
  return gulp.src("./stylesheets/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("."));
});

gulp.task("sass:watch", function () {
  gulp.watch("./stylesheets/**/*.scss", ["sass"]);
});

gulp.task("default", ["sass", "sass:watch"]);
