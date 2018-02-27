import * as plugins from '../legal.plugins';

// interfaces
import { ICompany } from 'tsclass';

export interface ILegalOptions {
  company: ICompany;
}

export class Legal {
  company: plugins.tsclass.ICompany;
  constructor(optionsArg: ILegalOptions) {
    this.company = optionsArg.company;
  }
}
