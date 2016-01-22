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
plugins.gulp.task("default", function(cb){
    plugins.g.sequence("download","jade")(cb);
});
plugins.gulp.start.apply(plugins.gulp, ['default']);