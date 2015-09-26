/// <reference path="../typings/tsd.d.ts" />
module.exports = function (umbrella, gulp, plugins) { return function () {
    plugins.pushrocks.beautylog.log('Path is: ' + umbrella.path.buildbase);
    var stream = gulp.src(umbrella.path.jadeBase + "*.jade")
        .pipe(plugins.plumber())
        .pipe(gulp.dest(umbrella.path.buildBase + 'jade/'));
    return stream;
}; };
