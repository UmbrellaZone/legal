/// <reference path="../typings/tsd.d.ts" />
module.exports = function (umbrella, gulp, plugins) { return function () {
    var stream = gulp.src(umbrella.path.devbase + "sass/*.sass")
        .pipe(plugins.plumber())
        .pipe(plugins.sass().on("error", plugins.sass.logError))
        .pipe(plugins.makejson({ filename: 'styles.json' }))
        .pipe(gulp.dest(plugins.path.join(umbrella.path.buildbase, 'styles')));
    return stream;
}; };
//# sourceMappingURL=sass.js.map