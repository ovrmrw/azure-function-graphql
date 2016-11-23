"use strict";
var auth0HookFunction = require('azure-functions-auth0');
var utils_1 = require("../utils");
var const_1 = require("../const");
var clientId = const_1.appSecretKeyJson.auth0.clientId;
var clientSecret = const_1.appSecretKeyJson.auth0.clientSecret;
var domain = const_1.appSecretKeyJson.auth0.domain;
if ([clientId, clientSecret, domain].some(function (key) { return !key; })) {
    throw new Error('Env keys for Auth0 are not collected.');
}
require('dotenv').config();
if (process.env.NODE_ENV === 'local') {
    exports.auth0AuthenticationHook = utils_1.wrapper;
    console.info('======= auth0AuthenticationHook is now mocked. =======');
}
else {
    exports.auth0AuthenticationHook = auth0HookFunction({
        clientId: clientId,
        clientSecret: clientSecret,
        domain: domain,
    });
}
