"use strict";
var auth0HookFunction = require('azure-functions-auth0');
require('dotenv').config();
var clientId = process.env.AUTH0_CLIENT_ID;
var clientSecret = process.env.AUTH0_CLIENT_SECRET;
var domain = process.env.AUTH0_DOMAIN;
if ([clientId, clientSecret, domain].some(function (key) { return !key; })) {
    throw new Error('Env keys for Auth0 are not collected.');
}
exports.auth0AuthenticationHook = auth0HookFunction({
    clientId: clientId,
    clientSecret: clientSecret,
    domain: domain,
});
