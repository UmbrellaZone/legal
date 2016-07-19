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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFDM0MsbURBQW1EO0FBQ25ELDZDQUE2QztBQUM3Qyw0Q0FBNEM7QUFDNUMsaURBQWlEO0FBRWpELElBQUksT0FBTyxHQUFHLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLHdDQUF3QztBQUMxRSxJQUFJLE1BQU0sR0FBRyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDbkMsSUFBSSxLQUFLLEdBQUcsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO0FBR2pDOzs4RUFFOEU7QUFDOUUsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFTLEVBQUU7SUFDcEMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzlDLENBQUMsQ0FBQyxDQUFDO0FBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDIn0=