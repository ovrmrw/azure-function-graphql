const auth0HookFunction = require('azure-functions-auth0');

import { NestedAzureFunction } from '../../types';
import { wrapper } from '../utils';

require('dotenv').config();
const clientId = process.env.AUTH0_CLIENT_ID;
const clientSecret = process.env.AUTH0_CLIENT_SECRET;
const domain = process.env.AUTH0_DOMAIN;

if ([clientId, clientSecret, domain].some(key => !key)) {
  throw new Error('Env keys for Auth0 are not collected.');
}


export let auth0AuthenticationHook: NestedAzureFunction;

if (process.env.NODE_ENV === 'local') {
  auth0AuthenticationHook = wrapper;
  console.info('======= auth0AuthenticationHook is now mocked. =======');
} else {
  auth0AuthenticationHook = auth0HookFunction({
    clientId,
    clientSecret,
    domain,
  });
}
