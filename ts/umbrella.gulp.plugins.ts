/// <reference path="./index.ts" />
module GulpPlugins {
    export function init() {
        var gulpLoadPlugins = require("gulp-load-plugins");
        var plugins = {
            beautylog: require("beautylog"),
            g: gulpLoadPlugins({
                rename: {
                    "gulp-front-matter": "frontMatter",
                    "gulp-add-src": "addsrc",
                    "gulp-markdown-to-json": "markdownToJson",
                    "gulp-remote-src": "remoteSrc"
                }
            }),
            gulp: require("gulp"),
            fs: require("fs-extra"),
            path: require("path"),
            remotezip: require("remotezip")
        };

        return plugins;
    }
}