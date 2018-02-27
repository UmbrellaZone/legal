import * as plugins from './legal.plugins';
import { ICompany } from 'tsclass';
import * as legal from './mod.legal/classes.legal';
import * as licenseChecker from './mod.licensechecker/classes.licensechecker';

export const createLicenseChecker = async () => {
  const licenseCheckerMod = await import('./mod.licensechecker/classes.licensechecker');
  const licenseChecker = new licenseCheckerMod.LicenseChecker();
  return licenseChecker;
};

export const createLegal = async (companyArg: ICompany) => {
  const legalMod = await import('./mod.legal/classes.legal');
  return new legalMod.Legal({
    company: companyArg
  });
};
