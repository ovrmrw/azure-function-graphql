"use strict";
var appRootDir = require('app-root-path').path;
exports.secretKeyDir = appRootDir + '/secret-key';
exports.appSecretKeyJson = require(exports.secretKeyDir + '/app.secret.json');
exports.serviceAccountKeyJson = require(exports.secretKeyDir + '/serviceAccountKey.json');
