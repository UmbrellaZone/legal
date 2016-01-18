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
gulp.task("default", function(cb){
    plugins.sequence("jade","text")(cb);
});
gulp.start.apply(gulp, ['default']);