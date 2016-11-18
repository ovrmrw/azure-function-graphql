import * as assert from 'power-assert';

import { mockContext, mockRequest } from '../lib';
import { AFContext, AFRequest } from '../../types';

import azureFunction from '../../createCustomToken';


describe('ENDPOINT: createCustomToken', () => {
  let context: AFContext = mockContext;
  let req: AFRequest = mockRequest;


  beforeEach(() => {
    req.query.user_id = 'hoge';
  });


  it('azureFunction', async () => {
    await azureFunction(context, req);
    const res = context.res;
    console.log('res:', res);
    assert(typeof res.status === 'number');
    assert(typeof res.body.result === 'object');
    assert(!!res.body.result.customToken);
  });

});
