import * as now from 'lodash/now';

import { AzureFunction } from '../types';


export const lodashAzureFunction: (context: any, req: any) => Promise<{}> =
  (context, req) => {
    return new Promise(resolve => {
      context.res = {
        status: 200,
        body: 'now: ' + now()
      };
      resolve(context.done());
    });
  };


export { now };
