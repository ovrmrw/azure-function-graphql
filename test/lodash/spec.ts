import * as assert from 'power-assert';

import { truthy } from '../lib';
import { lodashAzureFunction, now } from '../../lodash/core';
import { AFContext, AFRequest } from '../../types';


describe('endpoint: lodash', () => {
  let context: AFContext = { res: {}, done: () => ({}) };
  let req: AFRequest = { body: {}, query: {} };

  it('now', () => {
    assert(typeof now === 'function');
    assert(typeof now() === 'number');
    assert(now() > 0);
  });


  it('fn', async () => {
    await lodashAzureFunction(context, req);
    const res = truthy(context.res);
    assert(typeof res.status === 'number');
    assert(typeof res.body === 'string');
  });

});
