#!/usr/bin/env node

/// <reference path="./index.ts" />
var GulpPlugins;
(function (GulpPlugins) {
    function init() {
        var gulpLoadPlugins = require("gulp-load-plugins");
        var plugins = {
            beautylog: require("beautylog"),
            g: gulpLoadPlugins({
                rename: {
                    "gulp-front-matter": "frontMatter",
                    "gulp-add-src": "addsrc",
                    "gulp-markdown-to-json": "markdownToJson",
                    "gulp-remote-src": "remoteSrc"
                }
            }),
            gulp: require("gulp"),
            fs: require("fs-extra"),
            path: require("path"),
            remotezip: require("remotezip")
        };
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
var UmbrellaPaths;
(function (UmbrellaPaths) {
    UmbrellaPaths.init = function () {
        var paths = {
            packageDir: __dirname
        };
        paths.temp = plugins.path.join(paths.packageDir, "temp/");
        paths.legaldocs = plugins.path.join(paths.temp, "legaldocs-master/docs");
        paths.buildBase = plugins.path.join(paths.packageDir, "test/");
        return paths;
    };
})(UmbrellaPaths || (UmbrellaPaths = {}));
/// <reference path="./index.ts" />
var GulpTasks;
(function (GulpTasks) {
    function init() {
        /**
         * Download Task:
         * Downloads legaldocs repo and stores it to "temp/"
         */
        plugins.gulp.task("download", function (cb) {
            plugins.remotezip.get({
                from: "https://github.com/UmbrellaZone/legaldocs/archive/master.zip",
                toPath: plugins.path.resolve(paths.temp),
                cb: cb
            });
        });
        /**
         * Sass Task
         */
        plugins.gulp.task("sass", function () {
        });
        /**
         * Jade Task
         */
        plugins.gulp.task("jade", function () {
            var stream = plugins.gulp.src(plugins.path.join(paths.packageDir, "web/jade/index.jade"))
                .pipe(plugins.g.plumber())
                .pipe(plugins.g.jade())
                .pipe(plugins.gulp.dest(plugins.path.join(paths.buildBase, 'jade/')));
            return stream;
        });
        /**
         * Text Task
         */
        plugins.gulp.task("text", function () {
        });
    }
    GulpTasks.init = init;
})(GulpTasks || (GulpTasks = {}));
/// <reference path="./typings/tsd.d.ts" />
/// <reference path="./umbrella.gulp.plugins.ts" />
/// <reference path="./umbrella.config.ts" />
/// <reference path="./umbrella.paths.ts" />
/// <reference path="./umbrella.gulp.tasks.ts" />
var plugins = GulpPlugins.init(); //is defined in umbrella.gulp.plugins.ts
var config = UmbrellaConfig.init();
var paths = UmbrellaPaths.init();
/* --------------------------------------------------------------------------
 ---------------------- run Tasks -------------------------------------------
 -------------------------------------------------------------------------- */
GulpTasks.init();
plugins.gulp.task("default", function (cb) {
    plugins.g.sequence("download", "jade")(cb);
});
plugins.gulp.start.apply(plugins.gulp, ['default']);
