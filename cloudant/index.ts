import { cloudantAzureFunction } from './main';
import { auth0AuthenticationHook } from '../lib/auth';


// export default auth0AuthenticationHook(cloudantAzureFunction);
export default cloudantAzureFunction;
