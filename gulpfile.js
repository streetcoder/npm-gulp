/**
 * Created by streetcoder on 4/26/15.
 */

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass'),
    plumber = require('gulp-plumber');

function errorLog(error){
    console.error.bind(error);
    this.emit('end');
}
// task: script
gulp.task('scripts', function(){

    gulp.src('js/*.js')
        .pipe(plumber())
        .pipe(uglify())
        .on('error', errorLog)
        .pipe(gulp.dest('build/js'));

});

gulp.task('sass', function() {
    return sass('scss', { style: 'expanded' })
        .on('error', errorLog)
        .pipe(gulp.dest('css'));
});


// task: watch

gulp.task('watch', function(){
    gulp.watch('js/*.js' , ['scripts']);
    gulp.watch('scss' , ['sass']);
});

gulp.task('default', ['scripts' , 'sass' , 'watch']);