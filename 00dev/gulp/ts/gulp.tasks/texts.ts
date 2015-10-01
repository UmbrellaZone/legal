/// <reference path="../typings/tsd.d.ts" />
module.exports = (umbrella, gulp, plugins) => () => {
    var stream = gulp.src(umbrella.path.devbase + "markdown/**/*.md")
        .pipe(plugins.plumber())
        .pipe()
        .pipe()
        .pipe(gulp.dest(plugins.path.join(umbrella.path.buildbase,'texts')));
    return stream;
};