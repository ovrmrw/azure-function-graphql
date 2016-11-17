import * as assert from 'power-assert';

import { mockContext, mockRequest } from '../lib';
import { AFContext, AFRequest } from '../../types';

import { lodashAzureFunction, now } from '../../lodash/main';


describe('ENDPOINT: lodash', () => {
  let context: AFContext = mockContext;
  let req: AFRequest = mockRequest;

  it('now', () => {
    assert(typeof now === 'function');
    assert(typeof now() === 'number');
    assert(now() > 0);
  });


  it('azureFunction', async () => {
    const ctx = await lodashAzureFunction(context, req);
    const res = ctx.res;
    console.log('res:', res);
    assert(typeof res.status === 'number');
    assert(typeof res.body.result.now === 'number');
  });

});
