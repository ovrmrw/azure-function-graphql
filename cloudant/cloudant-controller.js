"use strict";
var defaultsDeep = require("lodash/defaultsDeep");
var Cloudant = require('cloudant');
var const_1 = require("../lib/const");
var account = const_1.appSecretKeyJson.cloudant.username;
var key = const_1.appSecretKeyJson.cloudant.apiKey;
var password = const_1.appSecretKeyJson.cloudant.apiPassword;
if ([account, key, password].some(function (key) { return !key; })) {
    throw new Error('Env keys for Cloudant are not collected.');
}
var CloudantController = (function () {
    function CloudantController() {
        this.cloudant = Cloudant({ account: account, key: key, password: password });
    }
    // NEEDS _admin permission
    CloudantController.prototype.createDatabase = function (dbName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cloudant.db.create(dbName, function (err, body, header) {
                if (err) {
                    console.error(err);
                    reject(null);
                    return;
                }
                console.log('Create Database');
                console.log(body);
                resolve(body);
            });
        });
    };
    // NEEDS _admin permission
    CloudantController.prototype.dropDatabase = function (dbName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cloudant.db.destroy(dbName, function (err, body, header) {
                if (err) {
                    console.error(err);
                    reject(null);
                    return;
                }
                console.log('Destroy Database');
                console.log(body);
                resolve(body);
            });
        });
    };
    CloudantController.prototype.use = function (dbName) {
        return this.cloudant.db.use(dbName);
    };
    CloudantController.prototype.insertDocument = function (dbName, insertObj, _id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var db = _this.use(dbName);
            var temp = defaultsDeep(insertObj, _id ? { _id: _id } : {});
            db.insert(temp, function (err, body, header) {
                if (err) {
                    console.error(err);
                    reject(null);
                    return;
                }
                console.log('Insert Document');
                console.log(body);
                resolve(body);
            });
        });
    };
    CloudantController.prototype.getDocument = function (dbName, _id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var db = _this.use(dbName);
            db.get(_id, function (err, data, header) {
                if (err) {
                    console.error(err);
                    reject(null);
                    return;
                }
                console.log('Get Document');
                console.log(data);
                resolve(data);
            });
        });
    };
    CloudantController.prototype.deleteDocument = function (dbName, deleteObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var db = _this.use(dbName);
            db.destroy(deleteObj._id, deleteObj._rev, function (err, body, header) {
                if (err) {
                    console.error(err);
                    reject(null);
                    return;
                }
                console.log('Delete Document');
                console.log(body);
                resolve(body);
            });
        });
    };
    CloudantController.prototype.searchDocument = function (dbName, designName, indexName, searchText) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var db = _this.use(dbName);
            db.search(designName, indexName, { q: searchText }, function (err, result, header) {
                if (err) {
                    console.error(err);
                    reject(null);
                    return;
                }
                console.log('Search Document');
                console.log(result);
                resolve(result);
            });
        });
    };
    return CloudantController;
}());
exports.CloudantController = CloudantController;
