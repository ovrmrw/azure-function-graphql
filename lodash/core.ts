import * as now from 'lodash/now';

import { AzureFunction } from '../types';


export const lodashAzureFunction: AzureFunction =
  async (context, req) => {
    context.res = {
      status: 200,
      body: 'now: ' + now()
    };

    await new Promise(resolve => setTimeout(resolve, 2000));
    context.done();
  };


export { now };
