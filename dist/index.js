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
exports.createLicenseChecker = () => __awaiter(this, void 0, void 0, function* () {
    const licenseCheckerMod = yield Promise.resolve().then(() => require('./mod.licensechecker/classes.licensechecker'));
    const licenseChecker = new licenseCheckerMod.LicenseChecker();
    return licenseChecker;
});
exports.createLegal = (companyArg) => __awaiter(this, void 0, void 0, function* () {
    const legalMod = yield Promise.resolve().then(() => require('./mod.legal/classes.legal'));
    return new legalMod.Legal({
        company: companyArg
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS2EsUUFBQSxvQkFBb0IsR0FBRyxHQUFTLEVBQUU7SUFDN0MsTUFBTSxpQkFBaUIsR0FBRywyQ0FBYSw2Q0FBNkMsRUFBQyxDQUFDO0lBQ3RGLE1BQU0sY0FBYyxHQUFHLElBQUksaUJBQWlCLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDOUQsTUFBTSxDQUFDLGNBQWMsQ0FBQztBQUN4QixDQUFDLENBQUEsQ0FBQztBQUVXLFFBQUEsV0FBVyxHQUFHLENBQU8sVUFBb0IsRUFBRSxFQUFFO0lBQ3hELE1BQU0sUUFBUSxHQUFHLDJDQUFhLDJCQUEyQixFQUFDLENBQUM7SUFDM0QsTUFBTSxDQUFDLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQztRQUN4QixPQUFPLEVBQUUsVUFBVTtLQUNwQixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUEsQ0FBQyJ9