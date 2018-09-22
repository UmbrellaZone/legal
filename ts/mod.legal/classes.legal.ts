import * as plugins from '../legal.plugins';

// interfaces
import { ICompany } from '@tsclass/tsclass';
import { IExpectedTemplateData } from '@umbrellazone/legal-docs'

export interface ILegalOptions {
  company: ICompany;
}

export class Legal {
  company: plugins.tsclass.ICompany;
  constructor(optionsArg: ILegalOptions) {
    this.company = optionsArg.company;
  }

  async getPrivacyPolicyAsHtml(optionsArg: IExpectedTemplateData) {
    const privacyPolicyTemplateString = await plugins.legalDocs.getPrivacyPolicy();
    const smartmustache = new plugins.smartmustache.SmartMustache(privacyPolicyTemplateString);
    const appliedMarkdown = smartmustache.applyData(optionsArg);
    plugins.smartmarkdown.markdownToHtml(appliedMarkdown);
  }
}
