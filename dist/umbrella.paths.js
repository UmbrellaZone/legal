/// <reference path="./index.ts" />
var UmbrellaPaths;
(function (UmbrellaPaths) {
    UmbrellaPaths.init = function () {
        var paths = {
            packageDir: __dirname
        };
        paths.temp = plugins.path.join(paths.packageDir, "temp/");
        paths.legaldocs = plugins.path.join(paths.temp, "legaldocs-master/docs");
        paths.buildBase = plugins.path.join(paths.packageDir, "test/");
        return paths;
    };
})(UmbrellaPaths || (UmbrellaPaths = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW1icmVsbGEucGF0aHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy91bWJyZWxsYS5wYXRocy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQ0FBbUM7QUFDbkMsSUFBTyxhQUFhLENBVW5CO0FBVkQsV0FBTyxhQUFhLEVBQUMsQ0FBQztJQUNQLGtCQUFJLEdBQUc7UUFDZCxJQUFJLEtBQUssR0FBTztZQUNaLFVBQVUsRUFBRSxTQUFTO1NBQ3hCLENBQUM7UUFDRixLQUFLLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUMsT0FBTyxDQUFDLENBQUM7UUFDekQsS0FBSyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDeEUsS0FBSyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQyxDQUFBO0FBQ0wsQ0FBQyxFQVZNLGFBQWEsS0FBYixhQUFhLFFBVW5CIn0=