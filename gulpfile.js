var   gulp           = require('gulp'),
      concat         = require("gulp-concat"),
      sass           = require('gulp-sass')(require('sass')),
      pug            = require('gulp-pug'),
      livereload     = require('gulp-livereload'),
      minify         = require('gulp-minify'),
      autoprefixer   = require('gulp-autoprefixer');


      // Gulp Task Your Html
      gulp.task("html", function() {
         return gulp.src("stage/html/*.pug")
            .pipe(pug({pretty:true}))
            .pipe(gulp.dest("dist"))
            .pipe(livereload())

      });

      // Gulp Task Your Css

      gulp.task("css", function() {
         return gulp.src(["stage/css/**/*.css", "stage/css/**/*.scss"])
            .pipe(sass({outputStyle: "expanded"})).on("error", sass.logError)
            .pipe(autoprefixer())
            .pipe(concat('main.css'))
            .pipe(gulp.dest("dist/css"))

      });
      // Gulp Task Your Javascript
      gulp.task("js", function() {
         return gulp.src("stage/**/*.js")
            .pipe(concat('main.js'))
            .pipe(gulp.dest("dist/js"))
            .pipe(livereload())

      });
      // Task All
      gulp.task('watch', function () {
         require('./server.js')
         livereload.listen()
         gulp.watch("stage/html/*.pug", gulp.series('html'))
         gulp.watch(["stage/css/**/*.css", "stage/css/**/*.scss"] , gulp.series('css'))
         gulp.watch("stage/js/*.js", gulp.series('js'))
         

      });