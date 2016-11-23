const appRootDir = require('app-root-path').path;
const secretKeyDir = appRootDir + '/secret-key';

// import * as admin from 'firebase-admin';
const admin = require('firebase-admin');

// require('dotenv').config();
// const databaseURL = process.env.FIREBASE_DATABASE_URL;
const config = require(secretKeyDir + '/app.secret.json');
const databaseURL = config.firebase.FIREBASE_DATABASE_URL;


if ([databaseURL].some(key => !key)) {
  throw new Error('Env keys for Firebase are not collected.');
}


const serviceAccount = require(secretKeyDir + '/serviceAccountKey.json');

export const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL,
});
