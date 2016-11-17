import * as assert from 'power-assert';

import { mockContext, mockRequest } from '../lib';
import { AFContext, AFRequest } from '../../types';

import { firebaseAzureFunction as azureFunction } from '../../createCustomToken/main';


describe('ENDPOINT: createCustomToken', () => {
  let context: AFContext = mockContext;
  let req: AFRequest = mockRequest;


  beforeEach(() => {
    req.query.user_id = 'hoge';
  });


  it('azureFunction', async () => {
    const ctx = await azureFunction(context, req);
    const res = ctx.res;
    console.log('res:', res);
    assert(typeof res.status === 'number');
    assert(typeof res.body === 'object');
    assert(!!res.body.customToken);
  });

});
