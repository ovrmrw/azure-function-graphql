import { firebaseApp } from '../lib/firebase';
import { passedTimeMessage } from '../lib/utils';
import { AzureFunction } from '../types';


export const firebaseAzureFunction: AzureFunction =
  async (context, req) => {
    const startTime = new Date().getTime();
    const uid = req.query.user_id || req.body.user_id;

    if (!uid) {
      context.res = {
        status: 400,
        body: { error: 'user_id is needed.' }
      };
    } else {
      try {
        const customToken: string = await firebaseApp.auth().createCustomToken(uid);
        context.log('customToken:', customToken);
        context.res = {
          status: 200,
          body: { result: { customToken } }
        };
      } catch (error) {
        context.res = {
          status: 400,
          body: { error }
        };
      }
    }
    
    context.log(passedTimeMessage(startTime));
    context.done();
    // return;
  };
