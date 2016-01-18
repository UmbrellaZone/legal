/// <reference path="./index.ts" />
var GulpPlugins;
(function (GulpPlugins) {
    function init() {
        var gulpLoadPlugins = require("gulp-load-plugins");
        var plugins = gulpLoadPlugins({
            rename: {
                "gulp-front-matter": "frontMatter",
                "gulp-add-src": "addsrc",
                "gulp-markdown-to-json": "markdownToJson",
                "gulp-remote-src": "remoteSrc"
            }
        });
        // now add more plugins non gulp plugins to the plugins object
        plugins.browserSync = require("browser-sync");
        plugins.color = require("colors");
        plugins.fs = require("fs-extra");
        plugins.path = require("path");
        plugins.pushrocks = require("pushrocks");
        return plugins;
    }
    GulpPlugins.init = init;
})(GulpPlugins || (GulpPlugins = {}));
/// <reference path="./index.ts" />
var UmbrellaConfig;
(function (UmbrellaConfig) {
    UmbrellaConfig.init = function () {
        var config = {};
        config.paths = {};
        return config;
    };
})(UmbrellaConfig || (UmbrellaConfig = {}));
/// <reference path="./index.ts" />
var GulpTasks;
(function (GulpTasks) {
    function init() {
        /**
         * Sass Task
         */
        gulp.task("sass", function () {
        });
        /**
         * Jade Task
         */
        gulp.task("jade", function () {
            var stream = gulp.src(config.paths.jadeBase + "*.jade")
                .pipe(plugins.plumber())
                .pipe(gulp.dest(config.paths.buildBase + 'jade/'));
            return stream;
        });
        /**
         * Text Task
         */
        gulp.task("text", function () {
        });
    }
    GulpTasks.init = init;
})(GulpTasks || (GulpTasks = {}));
/// <reference path="./typings/tsd.d.ts" />
/// <reference path="./umbrella.gulp.plugins.ts" />
/// <reference path="./umbrella.config.ts" />
/// <reference path="./umbrella.gulp.tasks.ts" />
var gulp = require("gulp");
var plugins = GulpPlugins.init(); //is defined in umbrella.gulp.plugins.ts
var config = UmbrellaConfig.init();
/* --------------------------------------------------------------------------
 ---------------------- run Tasks -------------------------------------------
 -------------------------------------------------------------------------- */
GulpTasks.init();
gulp.task("default", function (cb) {
    plugins.sequence("jade", "text")(cb);
});
gulp.start.apply(gulp, ['default']);
