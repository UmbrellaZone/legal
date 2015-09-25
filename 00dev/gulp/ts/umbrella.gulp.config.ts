/// <reference path="./gulpfile.ts"/>
var pr = require("pushrocks");
module UmbrellaConfig {
    var umbrella:any;

    umbrella.path:any = {}
    umbrella.path.devbase = pr.smartpath.getAbsPath('.');



    export function init() {
        umbrella.path = {};
        umbrella.path.buildbase
        return umbrella;
    }
}