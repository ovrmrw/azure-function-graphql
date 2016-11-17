"use strict";
var DataLoader = require('dataloader');
var firebase_connectors_1 = require("./firebase-connectors");
function createLoaders(cache, batch) {
    if (cache === void 0) { cache = true; }
    if (batch === void 0) { batch = true; }
    var options = { cache: cache, batch: batch };
    return {
        userLoader: new DataLoader(userLoaderCallback, options),
        hobbyLoader: new DataLoader(hobbyLoaderCallback, options),
    };
}
exports.createLoaders = createLoaders;
function userLoaderCallback(keys) {
    return firebase_connectors_1.getUsersConnector(keys);
}
function hobbyLoaderCallback(keys) {
    return firebase_connectors_1.getHobbiesConnector(keys);
}
