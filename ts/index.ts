import * as plugins from './legal.plugins'

// interfces
import { } from 'tsclass'

export class Legal {
  company: plugins.tsclass.ICompany

}

export let makeProvider = async () => {
  return {
    privacyPolicy: await plugins.legaldocs.getPrivacyPolicy()
  }
}
