/**
 * Created by streetcoder on 4/26/15.
 */

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass'),
    plumber = require('gulp-plumber');

// task: script
gulp.task('scripts', function(){

    gulp.src('js/*.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));

});

gulp.task('sass', function() {
    return sass('scss', { style: 'expanded' })
        .pipe(plumber())
        .pipe(gulp.dest('css'));
});

// task: style

gulp.task('styles', function(){
    gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css/'));
});

// task: watch

gulp.task('watch', function(){
    gulp.watch('js/*.js' , ['scripts']);
});

gulp.task('default', ['scripts' , 'sass' , 'watch']);