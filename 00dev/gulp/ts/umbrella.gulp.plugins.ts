/// <reference path="./gulpfile.ts" />
module GulpPlugins {
    export function init() {
        var gulpLoadPlugins = require("gulp-load-plugins");
        plugins = gulpLoadPlugins({
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
        plugins.fs = require("fs");
        plugins.jadeDoc = require("jade-doc");
        plugins.mail = require("mailgun-send");
        plugins.mergeStream = require("merge-stream");
        plugins.path = require("path");
        plugins.pushrocks = require("pushrocks");
        plugins.reload = require("require-reload");
        plugins.sassDoc = require("sassdoc");
        plugins.sassConvert = require("sass-convert");

        //getPlugin function for non npm plugins (distributed with mojo)
        var getPlugin = function(plugin:string) {
            return require("./mojo.gulp.plugins/" + plugin + ".js");
        }

        //import custom plugins (not npm managed)
        // ***nothing here so far***
    }
}