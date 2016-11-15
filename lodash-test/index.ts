import * as lodash from 'lodash';

const authConfig = require('../auth0.secret.json');

const auth0: (fn: Function) => Function = require('azure-functions-auth0')({
  clientId: authConfig.clientId,
  clientSecret: authConfig.clientSecret,
  domain: authConfig.domain,
});


export const azureFunction = auth0(function (context, req) {
  context.res = {
    status: 200,
    body: 'now: ' + lodash.now()
  };
  context.done();
});
