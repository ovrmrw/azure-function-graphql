import * as now from 'lodash/now';

import { AzureFunction } from '../types';


export const lodashAzureFunction: AzureFunction =
  (context, req) => {
    return (async () => {
      context.res = {
        status: 200,
        body: 'now: ' + now()
      };

      await new Promise(resolve => setTimeout(resolve, 2000));
      context.done();
    })();
  };


export { now };
