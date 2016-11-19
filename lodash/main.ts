import * as now from 'lodash/now';

import { AzureFunction } from '../types';
import { passedTimeMessage } from '../lib/utils';


export const lodashAzureFunction: AzureFunction =
  (context, req) => {
    const startTime = new Date().getTime();
    context.res = {
      status: 200,
      body: { result: { now: now() } }
    };
    // await new Promise(resolve => setTimeout(resolve, 2000));
    context.log(passedTimeMessage(startTime));
    context.done();
    // return;
  };


export { now };
