import { firebaseApp } from '../lib/firebase';
import { AzureFunction } from '../types';


export const firebaseAzureFunction: AzureFunction =
  async (context, req) => {
    const uid = req.query.user_id || req.body.user_id;

    try {
      const customToken: string = await firebaseApp.auth().createCustomToken(uid);
      context.res = {
        status: 200,
        body: { customToken }
      };
      // context.done();
    } catch (err) {
      context.res = {
        status: 400,
        body: err
      };
      // context.done();
    }
    return context;
  };
