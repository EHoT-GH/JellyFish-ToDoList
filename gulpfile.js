var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoPrefixer = require('gulp-autoprefixer');

//STYLES
gulp.task('style', function() {
  return gulp.src('sass/**/*.sass')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoPrefixer({
        browsers: ['last 15 version']
      }))
      .pipe(gulp.dest('css'));
});


//WATCH
gulp.task('watch', function() {
  gulp.watch('sass/**/*.sass', ['style']);
});

gulp.task('default', ['watch']);