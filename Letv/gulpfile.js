const gulp = require("gulp");
//复制html
gulp.task("copy-html",function(){
    return gulp.src("html/*.html")
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload());
})
//复制img
gulp.task("copy-img",function(){
    return gulp.src("img/**/*")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
})
//复制scss
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const minify = require("gulp-minify-css");
gulp.task("index-sass",function(){
    return gulp.src("stylesheet/index.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css/"))
    .pipe(minify())
    .pipe(rename("index.min.css"))
    .pipe(gulp.dest("dist/css/"))
    .pipe(connect.reload());
})
gulp.task("all-sass",function(){
    return gulp.src("stylesheet/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css/"))
    .pipe(connect.reload());
})
//复制js
const uglify = require("gulp-uglify");
gulp.task("copy-js",function(){
    return gulp.src("javascript/*.js")
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
})
//复制data数据
gulp.task("copy-data",function(){
    return gulp.src("data/*.json")
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload());
})
//一次性复制
gulp.task("build",["copy-html","copy-img","index-sass","all-sass","copy-js","copy-data"],function(){
    console.log("项目建立成功！");
})
//事件监听
gulp.task("watch",function(){
    gulp.watch(["stylesheet/index.scss"],["index-sass"]);
    gulp.watch(["stylesheet/*.scss"],["all-sass"]);
    gulp.watch(["javascript/*.js"],["copy-js"]);
    gulp.watch(["data/*.json"],["copy-data"]);
    gulp.watch(["html/*.html"],["copy-html"]);
})
//建立临时服务器
const connect = require("gulp-connect");
gulp.task("server",function(){
    connect.server({
        root:"dist",
        port:9999,
        livereload:true
    })
})
//同时打开服务器和监听
gulp.task("default",["watch","server"]);