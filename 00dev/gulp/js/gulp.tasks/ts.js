/// <reference path="../typings/tsd.d.ts" />
module.exports = function (umbrella, gulp, plugins) { return function () {
    /**
     * gulp stream that is being handed to the gulp engine
     */
    var stream = gulp.src(umbrella.path.devbase + "ts/*ts");
    //nothing to do here so far
    return stream;
}; };
