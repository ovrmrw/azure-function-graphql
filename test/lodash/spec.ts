import * as assert from 'power-assert';

import { mockContext, mockRequest } from '../lib';
import { AFContext, AFRequest } from '../../types';

import azureFunction from '../../lodash';
import { now } from '../../lodash/main';


describe('ENDPOINT: lodash', () => {
  let context: AFContext = mockContext;
  let req: AFRequest = mockRequest;

  it('now', () => {
    assert(typeof now === 'function');
    assert(typeof now() === 'number');
    assert(now() > 0);
  });


  it('azureFunction', async () => {
    await azureFunction(context, req);
    const res = context.res;
    assert(typeof res.status === 'number');
    assert(typeof res.body.result.now === 'number');
  });

});
