import * as assert from 'power-assert';

import { mockContext, mockRequest } from '../lib';
import { AFContext, AFRequest } from '../../types';

import azureFunction from '../../cloudant';


describe('ENDPOINT: cloudant', () => {
  let context: AFContext = mockContext;
  let req: AFRequest = mockRequest;


  it('azureFunction', async () => {
    await azureFunction(context, req);
    const res = context.res;
    console.log('res:', res);
    assert(typeof res.status === 'number');
    assert(typeof res.body.result === 'object');
    assert(res.body.result.total_rows === 2);
  });

});
