/// <reference path="../typings/tsd.d.ts" />
module.exports = (umbrella, gulp, plugins) => () => {
    var stream = gulp.src(plugins.path.join(umbrella.path.devBase + "markdown/**/*.md"))
        .pipe(plugins.plumber())
        .pipe(plugins.markdown())
        .pipe(plugins.html2jade())
        .pipe(plugins.makejson({},true))
        .pipe(gulp.dest(plugins.path.join(umbrella.path.buildBase + 'text')));
    return stream;
};