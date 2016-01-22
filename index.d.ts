/// <reference path="ts/typings/tsd.d.ts" />
declare module GulpPlugins {
    function init(): {
        beautylog: any;
        g: any;
        gulp: any;
        fs: any;
        path: any;
        remotezip: any;
    };
}
declare module UmbrellaConfig {
    var init: () => any;
}
declare module UmbrellaPaths {
    var init: () => any;
}
declare module GulpTasks {
    function init(): void;
}
declare var plugins: {
    beautylog: any;
    g: any;
    gulp: any;
    fs: any;
    path: any;
    remotezip: any;
};
declare var config: any;
declare var paths: any;
