/// <reference path="./index.ts" />
module UmbrellaPaths {
    export var init = function() {
        var paths:any = {
            packageDir: __dirname
        };
        paths.temp = plugins.path.join(paths.packageDir,"temp/");
        paths.legaldocs = plugins.path.join(paths.temp,"legaldocs-master/docs");
        paths.buildBase = plugins.path.join(paths.packageDir,"test/");
        return paths;
    }
}