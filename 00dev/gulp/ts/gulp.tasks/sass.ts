/// <reference path="../typings/tsd.d.ts" />
module.exports = (umbrella, gulp, plugins) => () => {
    var stream = gulp.src(umbrella.path.devbase + "sass/*.sass")
        .pipe(plugins.plumber())
        .pipe(plugins.sass().on("error", plugins.sass.logError))
        .pipe(toJson({
            strip: /^.+\/?\\?public\/?\\?/ //create just file names by removing everything from left of public/ folder
        }))
        .pipe(gulp.dest(umbrella.path.buildbase));
    return stream;
};