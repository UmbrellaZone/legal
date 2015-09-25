/// <reference path="../typings/tsd.d.ts" />
module.exports = (umbrella, gulp, plugins) => () => {
    var stream = gulp.src(umbrella.path.jadebase + "*.jade")
        .pipe(plugins.plumber())
        .pipe(gulp.dest(umbrella.path.buildbase + 'jade/'));
    return stream;
};