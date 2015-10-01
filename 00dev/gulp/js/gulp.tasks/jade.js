/// <reference path="../typings/tsd.d.ts" />
module.exports = function (umbrella, gulp, plugins) { return function () {
    var stream = gulp.src(umbrella.path.jadeBase + "*.jade")
        .pipe(plugins.plumber())
        .pipe(gulp.dest(umbrella.path.buildBase + 'jade/'));
    return stream;
}; };
