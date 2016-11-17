const auth0HookFunction = require('azure-functions-auth0');

import { NestedAzureFunction } from '../../types';

require('dotenv').config();
const clientId = process.env.AUTH0_CLIENT_ID;
const clientSecret = process.env.AUTH0_CLIENT_SECRET;
const domain = process.env.AUTH0_DOMAIN;

if ([clientId, clientSecret, domain].some(key => !key)) {
  throw new Error('Env keys for Auth0 are not collected.');
}


export const auth0AuthenticationHook: NestedAzureFunction =
  auth0HookFunction({
    clientId,
    clientSecret,
    domain,
  });
