import { firebaseApp } from '../lib/firebase';
import { AzureFunction } from '../types';


export const firebaseAzureFunction: AzureFunction =
  async (context, req) => {
    const uid = req.query.user_id || req.body.user_id;
    if (!uid) {
      context.res = {
        status: 400,
        body: { error: 'user_id is needed.' }
      };
      return context;
    }

    try {
      const customToken: string = await firebaseApp.auth().createCustomToken(uid);
      context.res = {
        status: 200,
        body: { customToken }
      };
      // context.done();
    } catch (error) {
      context.res = {
        status: 400,
        body: { error }
      };
      // context.done();
    }
    return context;
  };
