const auth0HookFunction = require('azure-functions-auth0');

import { NestedAzureFunction } from '../../types';

const auth0Config = require('../../auth0.secret.json');


export const auth0AuthenticationHook: NestedAzureFunction =
  auth0HookFunction({
    clientId: auth0Config.clientId,
    clientSecret: auth0Config.clientSecret,
    domain: auth0Config.domain,
  });
