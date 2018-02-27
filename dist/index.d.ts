import * as plugins from './legal.plugins';
import * as legal from './mod.legal/classes.legal';
import * as licenseChecker from './mod.licensechecker/classes.licensechecker';
export declare const createLicenseChecker: () => Promise<licenseChecker.LicenseChecker>;
export declare const createLegal: (companyArg: plugins.tsclass.ICompany) => Promise<legal.Legal>;
