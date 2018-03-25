var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('compile:scss', function() {
    return gulp.src('./src/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
    return gulp.watch('./src/**/*.scss', gulp.series('compile:scss'));
});