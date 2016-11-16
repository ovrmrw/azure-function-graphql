import * as assert from 'power-assert';

import { truthy } from '../lib';
import { cloudantAzureFunction } from '../../cloudant';
import { AFContext, AFRequest } from '../../types';


describe('endpoint: lodash', () => {
  let context: AFContext = { res: {}, done: () => { } };
  let req: AFRequest = { body: {}, query: {} };

  
  it('fn', async () => {
    await cloudantAzureFunction(context, req);
    const res = truthy(context.res);
    assert(typeof res.status === 'number');
    assert(typeof res.body === 'string');
  });

});
