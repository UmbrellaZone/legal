/// <reference path="./index.ts" />
module GulpTasks {
    export function init() {
        /**
         * Download Task:
         * Downloads legaldocs repo and stores it to "temp/"
         */
        plugins.gulp.task("download", function(cb){
            plugins.remotezip.get({
                from:"https://github.com/UmbrellaZone/legaldocs/archive/master.zip",
                toPath:plugins.path.resolve(paths.temp),
                cb: cb
            });
        });

        /**
         * Sass Task
         */
        plugins.gulp.task("sass", function(){

        });

        /**
         * Jade Task
         */
        plugins.gulp.task("jade", function(){
            var stream = plugins.gulp.src(plugins.path.join(paths.packageDir,"web/jade/index.jade"))
                .pipe(plugins.g.plumber())
                .pipe(plugins.g.jade())
                .pipe(plugins.gulp.dest(plugins.path.join(paths.buildBase,'jade/')));
            return stream;
        });

        /**
         * Text Task
         */
        plugins.gulp.task("text", function(){

        });
    }
}