import { firebaseAzureFunction } from './main';
import { auth0AuthenticationHook } from '../lib/auth';


export default auth0AuthenticationHook(firebaseAzureFunction);
// export default firebaseAzureFunction;
