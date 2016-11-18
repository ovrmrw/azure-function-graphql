import { graphqlAzureFunction } from './main';
import { auth0AuthenticationHook } from '../lib/auth';
import { wrapper } from '../lib/utils';


// export default auth0AuthenticationHook(graphqlAzureFunction);
export default auth0AuthenticationHook(wrapper(graphqlAzureFunction));
