var gulp = require('gulp')
var uglify = require('gulp-uglify')
var concat = require('gulp-concat')

gulp.task('zipJs',function(){
    gulp.src(['./script1.js','./script2.js'])
        .pipe(uglify())
        .pipe(gulp.dest('./zip'))
})


gulp.task('conJs',function(){
    gulp.src(['./zip/script1.js','./zip/script2.js'])
        .pipe(concat('ss.js'))
        .pipe(gulp.dest('./zip'))
})

gulp.task('default',['zipJs','conJs'])