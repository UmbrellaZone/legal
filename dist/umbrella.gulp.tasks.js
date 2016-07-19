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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW1icmVsbGEuZ3VscC50YXNrcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3VtYnJlbGxhLmd1bHAudGFza3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUNBQW1DO0FBQ25DLElBQU8sU0FBUyxDQXVDZjtBQXZDRCxXQUFPLFNBQVMsRUFBQyxDQUFDO0lBQ2Q7UUFDSTs7O1dBR0c7UUFDSCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBUyxFQUFFO1lBQ3JDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO2dCQUNsQixJQUFJLEVBQUMsOERBQThEO2dCQUNuRSxNQUFNLEVBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDdkMsRUFBRSxFQUFFLEVBQUU7YUFDVCxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUVIOztXQUVHO1FBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1FBRTFCLENBQUMsQ0FBQyxDQUFDO1FBRUg7O1dBRUc7UUFDSCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDdEIsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBQyxxQkFBcUIsQ0FBQyxDQUFDO2lCQUNuRixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RSxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO1FBRUg7O1dBRUc7UUFDSCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFFMUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBckNlLGNBQUksT0FxQ25CLENBQUE7QUFDTCxDQUFDLEVBdkNNLFNBQVMsS0FBVCxTQUFTLFFBdUNmIn0=