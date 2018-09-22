import { tap, expect } from '@pushrocks/tapbundle';
import * as legal from '../ts/index';

tap.test('should create an instance of legal', async () => {
  let testLegal = await legal.createLegal({
    name: 'AnyCorp GmbH',
    foundedDate: {
      year: 2017,
      month: 4,
      day: 3
    },
    closedDate: {
      year: 2017,
      month: 4,
      day: 3
    },
    status: 'active'
  });

  expect(testLegal).to.have.property('company');
  
  testLegal.getPrivacyPolicyAsHtml({
    company: testLegal.company,
    legal: {
      googleAdSense: true,
      npmTracking: true,
      serviceWorker: true
    }
  });
});

tap.test('should create instance of licenseChecker', async () => {
  const licenseChecker = await legal.createLicenseChecker();
  let plainResultArray = await licenseChecker.createPlainResultArray(process.cwd());
  expect(plainResultArray).to.be.instanceof(Array);
  expect(plainResultArray[0]).to.have.property('license');
});

tap.test('should exclude certain licenses', async () => {
  const licenseChecker = await legal.createLicenseChecker();
  const checkResult = await licenseChecker.excludeLicenseWithinPath(process.cwd(), ['MIT']);
  expect(checkResult.failingModules.length).to.be.greaterThan(10);
});

tap.test('should include certain licenses', async () => {
  const licenseChecker = await legal.createLicenseChecker();
  const checkResult = await licenseChecker.includeLicencesWithinPath(process.cwd(), ['MIT']);
  expect(checkResult.failingModules.length).to.be.greaterThan(10);
});

tap.start();
