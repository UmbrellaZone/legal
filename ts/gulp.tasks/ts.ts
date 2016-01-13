/// <reference path="../typings/tsd.d.ts" />
module.exports = function (umbrella, gulp, plugins) {
    return function() {
        var stream = gulp.src(umbrella.path.devbase + "ts/*ts")
            .pipe(gulp.dest());
        return stream;
    };
};