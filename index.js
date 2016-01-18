/// <reference path="./index.ts" />
var GulpPlugins;
(function (GulpPlugins) {
    function init() {
        var gulpLoadPlugins = require("gulp-load-plugins");
        plugins = gulpLoadPlugins({
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
        plugins.fs = require("fs");
        plugins.jadeDoc = require("jade-doc");
        plugins.mail = require("mailgun-send");
        plugins.mergeStream = require("merge-stream");
        plugins.path = require("path");
        plugins.pushrocks = require("pushrocks");
        plugins.reload = require("require-reload");
        plugins.sassDoc = require("sassdoc");
        plugins.sassConvert = require("sass-convert");
        //getPlugin function for non npm plugins (distributed with mojo)
        var getPlugin = function (plugin) {
            return require("./mojo.gulp.plugins/" + plugin + ".js");
        };
        //import custom plugins (not npm managed)
        // ***nothing here so far***
    }
    GulpPlugins.init = init;
})(GulpPlugins || (GulpPlugins = {}));
/// <reference path="./index.ts" />
var GulpTasks;
(function (GulpTasks) {
    /**
     * loads a task from directory gulp.tasks
     * @param task is a string that names the task
     * @returns {any}
     */
    var getTask = function (task) {
        return require("./gulp.tasks/" + task + ".js")(umbrella, gulp, plugins);
    };
    function init() {
        gulp.task("sass", getTask("sass"));
        gulp.task("jade", getTask("jade"));
        gulp.task("text", getTask("text"));
    }
    GulpTasks.init = init;
})(GulpTasks || (GulpTasks = {}));
/// <reference path="./index.ts"/>
var pr = require("pushrocks");
var UmbrellaConfig;
(function (UmbrellaConfig) {
    var umbrella = {};
    var compileBase = pr.smartpath.getAbsPath('.') + '/';
    var devBase = compileBase + '../../../';
    umbrella.path = {};
    umbrella.path.devBase = devBase;
    //source base paths
    umbrella.path.jadeBase = devBase + 'jade/';
    umbrella.path.buildBase = devBase + '../01build/';
    umbrella.path.testbase = devBase + '../02test/';
    pr.beautylog.log(umbrella.path.buildBase);
    function init() {
        return umbrella;
    }
    UmbrellaConfig.init = init;
})(UmbrellaConfig || (UmbrellaConfig = {}));
/// <reference path="./typings/tsd.d.ts" />
/// <reference path="./umbrella.gulp.plugins.ts" />
/// <reference path="./umbrella.gulp.tasks.ts" />
/// <reference path="./umbrella.gulp.config.ts" />
console.log("Starting the mojo.gulp build process...");
console.log("require dev dependencies...");
/* --------------------------------------------------------------------------
 ---------------------- init gulp and gulp plugins ---------------------------
 -------------------------------------------------------------------------- */
/**
 * stores the reference to gulp
 * @type {any}
 */
var gulp = require("gulp");
/**
 * create var plugins in the right scope
 */
var plugins;
GulpPlugins.init(); //is defined in umbrella.gulp.plugins.ts
var umbrella = UmbrellaConfig.init();
/* --------------------------------------------------------------------------
 ---------------------- init Tasks -------------------------------------------
 -------------------------------------------------------------------------- */
/**
 * initializes secondary gulp tasks
 */
GulpTasks.init();
/**
 * gulp task that defines the the default chain of tasks perfeormed by mojoio framework
 */
gulp.task("default", function (cb) {
    plugins.sequence("jade", "text")(cb);
});
