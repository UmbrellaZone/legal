"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("../legal.plugins");
const licenseChecker = require("license-checker");
class CheckResult {
    constructor() {
        this.passingModules = [];
        this.failingModules = [];
    }
    addPassing(moduleResultArg) {
        this.passingModules.push(moduleResultArg);
    }
    addFailing(moduleResultArg) {
        this.failingModules.push(moduleResultArg);
    }
}
exports.CheckResult = CheckResult;
class LicenseChecker {
    excludeLicenseWithinPath(pathArg, licenseArrayArg) {
        return __awaiter(this, void 0, void 0, function* () {
            const checkResult = new CheckResult();
            const plainResultArray = yield this.createPlainResultArray(pathArg);
            plainResultArray.forEach(licenseResult => {
                if (licenseArrayArg.indexOf(licenseResult.license) === -1) {
                    checkResult.addPassing(licenseResult);
                }
                else {
                    checkResult.addFailing(licenseResult);
                }
            });
            return checkResult;
        });
    }
    includeLicencesWithinPath(pathArg, licenseArrayArg) {
        return __awaiter(this, void 0, void 0, function* () {
            const checkResult = new CheckResult();
            const plainResultArray = yield this.createPlainResultArray(pathArg);
            plainResultArray.forEach(licenseResult => {
                if (licenseArrayArg.indexOf(licenseResult.license) !== -1) {
                    checkResult.addPassing(licenseResult);
                }
                else {
                    checkResult.addFailing(licenseResult);
                }
            });
            return checkResult;
        });
    }
    createPlainResultArray(pathArg) {
        return __awaiter(this, void 0, void 0, function* () {
            const licenseJson = yield this.getJsonForPath(pathArg);
            const resultArray = [];
            for (let moduleKey in licenseJson) {
                const refObject = licenseJson[moduleKey];
                resultArray.push({
                    moduleName: moduleKey,
                    email: refObject.email,
                    licenseFile: refObject.licenseFile,
                    license: refObject.licenses,
                    path: refObject.path,
                    publisher: refObject.publisher,
                    repository: refObject.repository
                });
            }
            return resultArray;
        });
    }
    getJsonForPath(checkPathArg) {
        return __awaiter(this, void 0, void 0, function* () {
            let done = plugins.smartq.defer();
            licenseChecker.init({
                start: checkPathArg
            }, function (err, licenseJson) {
                if (err) {
                    done.reject(err);
                }
                else {
                    done.resolve(licenseJson);
                }
            });
            return yield done.promise;
        });
    }
}
exports.LicenseChecker = LicenseChecker;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3Nlcy5saWNlbnNlY2hlY2tlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3RzL21vZC5saWNlbnNlY2hlY2tlci9jbGFzc2VzLmxpY2Vuc2VjaGVja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw0Q0FBNEM7QUFDNUMsa0RBQWtEO0FBWWxEO0lBQUE7UUFDRSxtQkFBYyxHQUEyQixFQUFFLENBQUM7UUFDNUMsbUJBQWMsR0FBMkIsRUFBRSxDQUFDO0lBUTlDLENBQUM7SUFQQyxVQUFVLENBQUMsZUFBcUM7UUFDOUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELFVBQVUsQ0FBQyxlQUFxQztRQUM5QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM1QyxDQUFDO0NBQ0Y7QUFWRCxrQ0FVQztBQUVEO0lBRVEsd0JBQXdCLENBQUMsT0FBZSxFQUFFLGVBQXlCOztZQUN2RSxNQUFNLFdBQVcsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1lBQ3RDLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEUsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFO2dCQUN2QyxFQUFFLENBQUEsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3pELFdBQVcsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUE7Z0JBQ3ZDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sV0FBVyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDeEMsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFBO1lBQ0YsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUNyQixDQUFDO0tBQUE7SUFFSyx5QkFBeUIsQ0FBQyxPQUFlLEVBQUUsZUFBeUI7O1lBQ3hFLE1BQU0sV0FBVyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7WUFDdEMsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwRSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0JBQ3ZDLEVBQUUsQ0FBQSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDekQsV0FBVyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQTtnQkFDdkMsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixXQUFXLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUN4QyxDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUE7WUFDRixNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3JCLENBQUM7S0FBQTtJQUVLLHNCQUFzQixDQUFFLE9BQWU7O1lBQzNDLE1BQU0sV0FBVyxHQUFHLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN2RCxNQUFNLFdBQVcsR0FBMkIsRUFBRSxDQUFBO1lBQzlDLEdBQUcsQ0FBQyxDQUFDLElBQUksU0FBUyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLE1BQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDekMsV0FBVyxDQUFDLElBQUksQ0FBQztvQkFDZixVQUFVLEVBQUUsU0FBUztvQkFDckIsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLO29CQUN0QixXQUFXLEVBQUUsU0FBUyxDQUFDLFdBQVc7b0JBQ2xDLE9BQU8sRUFBRSxTQUFTLENBQUMsUUFBUTtvQkFDM0IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO29CQUNwQixTQUFTLEVBQUUsU0FBUyxDQUFDLFNBQVM7b0JBQzlCLFVBQVUsRUFBRSxTQUFTLENBQUMsVUFBVTtpQkFDakMsQ0FBQyxDQUFBO1lBQ0osQ0FBQztZQUNELE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDckIsQ0FBQztLQUFBO0lBRWEsY0FBYyxDQUFDLFlBQVk7O1lBQ3ZDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFPLENBQUM7WUFDdkMsY0FBYyxDQUFDLElBQUksQ0FDakI7Z0JBQ0UsS0FBSyxFQUFFLFlBQVk7YUFDcEIsRUFDRCxVQUFTLEdBQUcsRUFBRSxXQUFXO2dCQUN2QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25CLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDNUIsQ0FBQztZQUNILENBQUMsQ0FDRixDQUFDO1lBQ0YsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixDQUFDO0tBQUE7Q0FDRjtBQTlERCx3Q0E4REMifQ==