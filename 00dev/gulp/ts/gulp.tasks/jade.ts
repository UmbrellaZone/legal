/// <reference path="../typings/tsd.d.ts" />
module.exports = (umbrella, gulp, plugins) => () => {
    var stream = gulp.src(umbrella.path.jadeBase + "*.jade")
        .pipe(plugins.plumber())
        .pipe(gulp.dest(umbrella.path.buildBase + 'jade/'));
    return stream;
};