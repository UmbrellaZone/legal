/// <reference path="./gulpfile.ts"/>
var pr = require("pushrocks");
module UmbrellaConfig {
    var umbrella:any = {};


    var compileBase = pr.smartpath.getAbsPath('.') + '/';
    var devBase = compileBase + '../../../';

    umbrella.path = {};
    umbrella.path.devBase = devBase;

    //source base paths
    umbrella.path.jadeBase = devBase + 'jade/';

    umbrella.path.buildBase = devBase + '../01build/';
    umbrella.path.testbase = devBase + '../02test/';

    pr.beautylog.log(umbrella.path.buildBase);


    export function init() {
        return umbrella;
    }
}