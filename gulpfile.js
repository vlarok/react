"use strict";
var gulp =require('gulp');
var connnect=require('gulp-connect');
var open = require('gulp-open');

var config ={
    port: 9005,
    devBaseUrl:'http://localhost',
    paths:{
        html: './src/*.html',
        dist: './dist'
    }
}

gulp.task('connect', function(){
    connnect.server({
        root:['dist'],
        port:config.port,
        base:config.devBaseUrl,
        livereload:true
    });
});

gulp.task('open',['connect'], function(){
    gulp.src('dist/index.html')
    .pipe(open({uri:config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html',function(){
    gulp.src(config.paths.html)
.pipe(gulp.dest(config.paths.dist))
.pipe(connnect.reload());
});

gulp.task('watch', function(){
    gulp.watch(config.paths.html,['html']);
})

gulp.task('default',['html','open','watch']);