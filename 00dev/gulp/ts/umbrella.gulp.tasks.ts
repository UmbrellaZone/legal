/// <reference path="./gulpfile.ts" />
module GulpTasks {
    /**
     * loads a task from directory gulp.tasks
     * @param task is a string that names the task
     * @returns {any}
     */
    var getTask = function(task:string) {
        return require("./gulp.tasks/" + task + ".js")(mojo, gulp, plugins);
    }

    export function init() {
        gulp.task("sass", getTask("sass"));
    }
}