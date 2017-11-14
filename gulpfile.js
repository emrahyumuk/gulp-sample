var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var jsFiles = 'js/*.js';
var jsDest = 'dist';

gulp.task('default', function() {
    return gulp.src(jsFiles)
    .pipe(concat('script.js'))
    .pipe(gulp.dest(jsDest))
    .pipe(rename('script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(jsDest));
});