/// <reference path="../typings/tsd.d.ts" />
module.exports = function (umbrella, gulp, plugins) { return function () {
    var stream = gulp.src(umbrella.path.devbase + "markdown/**/*.md")
        .pipe(plugins.plumber())
        .pipe(plugins.markdown())
        .pipe(plugins.html2jade())
        .pipe(plugins.makejson())
        .pipe(gulp.dest(plugins.path.join(umbrella.path.buildbase, 'texts')));
    return stream;
}; };
