/// <reference path="./index.ts" />
module GulpPlugins {
    export function init() {
        var gulpLoadPlugins = require("gulp-load-plugins");
        var plugins = gulpLoadPlugins({
            rename: {
                "gulp-front-matter": "frontMatter",
                "gulp-add-src": "addsrc",
                "gulp-markdown-to-json": "markdownToJson",
                "gulp-remote-src": "remoteSrc"
            }
        });

        // now add more plugins non gulp plugins to the plugins object
        plugins.browserSync = require("browser-sync");
        plugins.color = require("colors");
        plugins.fs = require("fs-extra");
        plugins.path = require("path");
        plugins.pushrocks = require("pushrocks");

        return plugins;
    }
}