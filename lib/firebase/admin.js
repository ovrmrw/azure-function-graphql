"use strict";
var appRoot = require('app-root-path');
// import * as admin from 'firebase-admin';
var admin = require('firebase-admin');
require('dotenv').config();
var databaseURL = process.env.FIREBASE_DATABASE_URL;
if ([databaseURL].some(function (key) { return !key; })) {
    throw new Error('Env keys for Firebase are not collected.');
}
var serviceAccount = require(appRoot + '/serviceAccountKey.json');
exports.firebaseApp = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: databaseURL,
});
