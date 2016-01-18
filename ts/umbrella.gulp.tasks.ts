/// <reference path="./index.ts" />
module GulpTasks {
    export function init() {
        /**
         * Sass Task
         */
        gulp.task("sass", function(){

        });

        /**
         * Jade Task
         */
        gulp.task("jade", function(){
            var stream = gulp.src(config.paths.jadeBase + "*.jade")
                .pipe(plugins.plumber())
                .pipe(gulp.dest(config.paths.buildBase + 'jade/'));
            return stream;
        });

        /**
         * Text Task
         */
        gulp.task("text", function(){

        });
    }
}