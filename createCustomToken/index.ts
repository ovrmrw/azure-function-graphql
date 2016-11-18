import { firebaseAzureFunction } from './main';
import { auth0AuthenticationHook } from '../lib/auth';
import { wrapper } from '../lib/utils';


export default auth0AuthenticationHook(wrapper(firebaseAzureFunction));
// export default firebaseAzureFunction;
