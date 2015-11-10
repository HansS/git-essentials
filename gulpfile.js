var watch = require('gulp-watch');
var rename = require("gulp-rename");
var gulp = require('gulp');
var markdown = require('gulp-markdown');


gulp.task('tohtml', function () {
    return gulp.src('readme.md')
        .pipe(markdown())
        .pipe(gulp.dest('dist'));
});

gulp.task('rename',function(){
    return gulp.src('dist/readme.html')
        .pipe(rename('index.html'))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch',['tohtml','rename'],function(cb){
    watch('readme.md',function(){
       gulp.src('readme.md')
         .pipe(watch('readme.md'))
         .on('end',cb) ;
    });
});
