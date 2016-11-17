import * as assert from 'power-assert';

import { mockContext, mockRequest } from '../lib';
import { AFContext, AFRequest } from '../../types';

import { cloudantAzureFunction as azureFunction } from '../../cloudant/main';


describe('endpoint: cloudant', () => {
  let context: AFContext = mockContext;
  let req: AFRequest = mockRequest;


  it('azureFunction', async () => {
    const ctx = await azureFunction(context, req);
    const res = ctx.res;
    assert(typeof res.status === 'number');
    assert(typeof res.body === 'object');
    assert(res.body.total_rows === 2);
  });

});
