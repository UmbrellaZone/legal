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
const plugins = require("./legal.plugins");
class Legal {
}
exports.Legal = Legal;
exports.makeProvider = () => __awaiter(this, void 0, void 0, function* () {
    return {
        privacyPolicy: yield plugins.legaldocs.getPrivacyPolicy()
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQTBDO0FBSzFDO0NBR0M7QUFIRCxzQkFHQztBQUVVLFFBQUEsWUFBWSxHQUFHO0lBQ3hCLE1BQU0sQ0FBQztRQUNMLGFBQWEsRUFBRSxNQUFNLE9BQU8sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUU7S0FDMUQsQ0FBQTtBQUNILENBQUMsQ0FBQSxDQUFBIn0=