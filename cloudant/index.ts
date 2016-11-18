import { cloudantAzureFunction } from './main';
import { auth0AuthenticationHook } from '../lib/auth';
import { wrapper } from '../lib/utils';


// export default auth0AuthenticationHook(cloudantAzureFunction);
export default auth0AuthenticationHook(cloudantAzureFunction);
