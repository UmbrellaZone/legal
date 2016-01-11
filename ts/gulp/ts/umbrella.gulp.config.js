/// <reference path="./gulpfile.ts"/>
var pr = require("pushrocks");
var UmbrellaConfig;
(function (UmbrellaConfig) {
    var umbrella = {};
    var compileBase = pr.smartpath.getAbsPath('.') + '/';
    var devBase = compileBase + '../../../';
    umbrella.path = {};
    umbrella.path.devBase = devBase;
    //source base paths
    umbrella.path.jadeBase = devBase + 'jade/';
    umbrella.path.buildBase = devBase + '../01build/';
    umbrella.path.testbase = devBase + '../02test/';
    pr.beautylog.log(umbrella.path.buildBase);
    function init() {
        return umbrella;
    }
    UmbrellaConfig.init = init;
})(UmbrellaConfig || (UmbrellaConfig = {}));
//# sourceMappingURL=umbrella.gulp.config.js.map