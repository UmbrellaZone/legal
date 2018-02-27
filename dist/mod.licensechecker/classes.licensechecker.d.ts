export interface IModuleLicenseResult {
    moduleName: string;
    license: string;
    repository: string;
    publisher: string;
    email: string;
    path: string;
    licenseFile: string;
}
export declare class CheckResult {
    passingModules: IModuleLicenseResult[];
    failingModules: IModuleLicenseResult[];
    addPassing(moduleResultArg: IModuleLicenseResult): void;
    addFailing(moduleResultArg: IModuleLicenseResult): void;
}
export declare class LicenseChecker {
    excludeLicenseWithinPath(pathArg: string, licenseArrayArg: string[]): Promise<CheckResult>;
    includeLicencesWithinPath(pathArg: string, licenseArrayArg: string[]): Promise<CheckResult>;
    createPlainResultArray(pathArg: string): Promise<IModuleLicenseResult[]>;
    private getJsonForPath(checkPathArg);
}
