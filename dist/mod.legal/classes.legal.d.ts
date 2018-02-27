import * as plugins from '../legal.plugins';
import { ICompany } from 'tsclass';
export interface ILegalOptions {
    company: ICompany;
}
export declare class Legal {
    company: plugins.tsclass.ICompany;
    constructor(optionsArg: ILegalOptions);
}
