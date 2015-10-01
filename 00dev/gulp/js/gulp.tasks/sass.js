/// <reference path="../typings/tsd.d.ts" />
module.exports = function (umbrella, gulp, plugins) { return function () {
    var stream = gulp.src(umbrella.path.devbase + "sass/umbrella.base.sass")
        .pipe(plugins.plumber())
        .pipe(plugins.sass().on("error", plugins.sass.logError))
        .pipe(plugins.concat("main.css"))
        .pipe(gulp.dest(umbrella.path.buildbase));
    return stream;
}; };
