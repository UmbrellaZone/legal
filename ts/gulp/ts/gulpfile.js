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
/* --------------------------------------------------------------------------
 ---------------------- watch for changes ------------------------------------
 -------------------------------------------------------------------------- */
gulp.task("watch", function () {
});
/**
 * gulp task that defines the the default chain of tasks perfeormed by mojoio framework
 */
gulp.task("default", function (cb) {
    plugins.sequence("jade", "text")(cb);
});
//# sourceMappingURL=gulpfile.js.map