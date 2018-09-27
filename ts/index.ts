import * as plugins from './legal.plugins';
import { ICompany } from '@tsclass/tsclass';

export const createLicenseChecker = async () => {
  const licenseCheckerMod = await import('./mod.licensechecker/classes.licensechecker');
  return new licenseCheckerMod.LicenseChecker();
};

export const createLegal = async (companyArg: ICompany) => {
  const legalMod = await import('./mod.legal/classes.legal');
  return new legalMod.Legal({
    company: companyArg
  });
};
