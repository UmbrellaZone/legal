/// <reference path="./gulpfile.ts" />
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
//# sourceMappingURL=umbrella.gulp.tasks.js.map