import * as plugins from './legal.plugins';
export declare class Legal {
    company: plugins.tsclass.ICompany;
}
export declare let makeProvider: () => Promise<{
    privacyPolicy: string;
}>;
