import * as plugins from '../legal.plugins';
import * as licenseChecker from 'license-checker';

export interface IModuleLicenseResult {
  moduleName: string;
  license: string;
  repository: string;
  publisher: string;
  email: string;
  path: string;
  licenseFile: string;
}

export class CheckResult {
  passingModules: IModuleLicenseResult[] = [];
  failingModules: IModuleLicenseResult[] = [];
  addPassing(moduleResultArg: IModuleLicenseResult) {
    this.passingModules.push(moduleResultArg);
  }

  addFailing(moduleResultArg: IModuleLicenseResult) {
    this.failingModules.push(moduleResultArg);
  }
}

export class LicenseChecker {
  async excludeLicenseWithinPath(pathArg: string, licenseArrayArg: string[]) {
    const checkResult = new CheckResult();
    const plainResultArray = await this.createPlainResultArray(pathArg);
    plainResultArray.forEach(licenseResult => {
      if (licenseArrayArg.indexOf(licenseResult.license) === -1) {
        checkResult.addPassing(licenseResult);
      } else {
        checkResult.addFailing(licenseResult);
      }
    });
    return checkResult;
  }

  async includeLicencesWithinPath(pathArg: string, licenseArrayArg: string[]) {
    const checkResult = new CheckResult();
    const plainResultArray = await this.createPlainResultArray(pathArg);
    plainResultArray.forEach(licenseResult => {
      if (licenseArrayArg.indexOf(licenseResult.license) !== -1) {
        checkResult.addPassing(licenseResult);
      } else {
        checkResult.addFailing(licenseResult);
      }
    });
    return checkResult;
  }

  async createPlainResultArray(pathArg: string) {
    const licenseJson = await this.getJsonForPath(pathArg);
    const resultArray: IModuleLicenseResult[] = [];
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
  }

  private async getJsonForPath(checkPathArg) {
    let done = plugins.smartpromise.defer<any>();
    licenseChecker.init(
      {
        start: checkPathArg
      },
      function(err, licenseJson) {
        if (err) {
          done.reject(err);
        } else {
          done.resolve(licenseJson);
        }
      }
    );
    return await done.promise;
  }
}
