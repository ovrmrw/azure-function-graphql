"use strict";
var appRootDir = require('app-root-path').path;
var secretKeyDir = appRootDir + '/secret-key';
// import * as admin from 'firebase-admin';
var admin = require('firebase-admin');
var const_1 = require("../const");
var databaseURL = const_1.appSecretKeyJson.firebase.databaseUrl;
if ([databaseURL].some(function (key) { return !key; })) {
    throw new Error('Env keys for Firebase are not collected.');
}
exports.firebaseApp = admin.initializeApp({
    credential: admin.credential.cert(const_1.serviceAccountKeyJson),
    databaseURL: databaseURL,
});
