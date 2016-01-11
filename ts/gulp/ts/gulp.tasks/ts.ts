/// <reference path="../typings/tsd.d.ts" />
module.exports = (umbrella, gulp, plugins) => () => {
    /**
     * gulp stream that is being handed to the gulp engine
     */
    var stream = gulp.src(umbrella.path.devbase + "ts/*ts")
        .pipe(gulp.dest());
    return stream;
};