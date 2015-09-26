/// <reference path="../typings/tsd.d.ts" />
module.exports = (umbrella, gulp, plugins) => () => {
    plugins.pushrocks.beautylog.log('Path is: ' + umbrella.path.buildbase)
    var stream = gulp.src(umbrella.path.jadeBase + "*.jade")
        .pipe(plugins.plumber())
        .pipe(gulp.dest(umbrella.path.buildBase + 'jade/'));
    return stream;
};