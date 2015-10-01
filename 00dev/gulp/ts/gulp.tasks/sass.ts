/// <reference path="../typings/tsd.d.ts" />
module.exports = (umbrella, gulp, plugins) => () => {
    var stream = gulp.src(umbrella.path.devbase + "sass/*.sass")
        .pipe(plugins.plumber())
        .pipe(plugins.sass().on("error", plugins.sass.logError))
        .pipe(plugins.makeJson({filename:'styles.json'}))
        .pipe(gulp.dest(plugins.path.join(umbrella.path.buildbase,'styles')));
    return stream;
};