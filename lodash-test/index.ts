import * as lodash from 'lodash';

export function azureFunction(context, req) {
  context.log('Node.js HTTP trigger function processed a request. RequestUri=%s', req.originalUrl);

  // if (req.query.name || (req.body && req.body.name)) {
  //     context.res = {
  //         // status: 200, /* Defaults to 200 */
  //         body: "Hello GitHub, " + (req.query.name || req.body.name)
  //     };
  // }
  // else {
  //     context.res = {
  //         status: 400,
  //         body: "Please pass a name on the query string or in the request body"
  //     };
  // }
  context.res = {
    status: 200,
    body: 'now: ' + lodash.now()
  };
  context.done();
};
