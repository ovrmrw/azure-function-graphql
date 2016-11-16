import * as lodash from 'lodash';

import { AzureFunction } from '../types';

// const authConfig = require('../auth0.secret.json');

// const auth0: (fn: Function) => Function = require('azure-functions-auth0')({
//   clientId: authConfig.clientId,
//   clientSecret: authConfig.clientSecret,
//   domain: authConfig.domain,
// });
import { auth0AuthenticationHook } from '../lib/auth';


export const lodashAzureFunction: AzureFunction =
  auth0AuthenticationHook((context, req) => {
    context.res = {
      status: 200,
      body: 'now: ' + lodash.now()
    };
    context.done();
  });
