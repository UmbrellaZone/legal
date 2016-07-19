/// <reference path="./index.ts" />
var GulpPlugins;
(function (GulpPlugins) {
    function init() {
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
    GulpPlugins.init = init;
})(GulpPlugins || (GulpPlugins = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW1icmVsbGEuZ3VscC5wbHVnaW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvdW1icmVsbGEuZ3VscC5wbHVnaW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1DQUFtQztBQUNuQyxJQUFPLFdBQVcsQ0FxQmpCO0FBckJELFdBQU8sV0FBVyxFQUFDLENBQUM7SUFDaEI7UUFDSSxJQUFJLGVBQWUsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNuRCxJQUFJLE9BQU8sR0FBRztZQUNWLFNBQVMsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDO1lBQy9CLENBQUMsRUFBRSxlQUFlLENBQUM7Z0JBQ2YsTUFBTSxFQUFFO29CQUNKLG1CQUFtQixFQUFFLGFBQWE7b0JBQ2xDLGNBQWMsRUFBRSxRQUFRO29CQUN4Qix1QkFBdUIsRUFBRSxnQkFBZ0I7b0JBQ3pDLGlCQUFpQixFQUFFLFdBQVc7aUJBQ2pDO2FBQ0osQ0FBQztZQUNGLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3JCLEVBQUUsRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ3ZCLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3JCLFNBQVMsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDO1NBQ2xDLENBQUM7UUFFRixNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFuQmUsZ0JBQUksT0FtQm5CLENBQUE7QUFDTCxDQUFDLEVBckJNLFdBQVcsS0FBWCxXQUFXLFFBcUJqQiJ9