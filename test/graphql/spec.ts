import * as assert from 'power-assert';

import { mockContext, mockRequest } from '../lib';
import { AFContext, AFRequest } from '../../types';

import azureFunction from '../../graphql';


describe('ENDPOINT: graphql', () => {
  let context: AFContext = mockContext;
  let req: AFRequest = mockRequest;


  beforeEach(() => {
    req.body.query = `
      {
        user (id:"1") {
          id
          name
          age
          hobby {
            id
            name
          }
        }
      }
    `;
  });


  it('azureFunction', async () => {
    await azureFunction(context, req);
    const res = context.res;
    assert(typeof res.status === 'number');
    assert(typeof res.body.result === 'object');
  });

});
