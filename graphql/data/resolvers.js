"use strict";
var firebase_connectors_1 = require("./firebase-connectors");
exports.resolverMap = {
    RootQuery: {
        users: function (root, args, context, info) {
            return firebase_connectors_1.getUserIdsConnector().then(function (ids) { return context.loaders.userLoader.loadMany(ids); });
        },
        user: function (root, args, context, info) {
            return context.loaders.userLoader.load(args.id);
        },
    },
    User: {
        follow: function (user, args, context, info) {
            var limit = args.first || 100;
            var followIds = user.follow ? user.follow.slice(0, limit) : null;
            return followIds ? context.loaders.userLoader.loadMany(followIds) : null;
        },
        hobby: function (user, args, context, info) {
            var limit = args.first || 100;
            var hobbyIds = user.hobby ? user.hobby.slice(0, limit) : null;
            return hobbyIds ? context.loaders.hobbyLoader.loadMany(hobbyIds) : null;
        }
    }
};
exports.resolverMap2 = {
    RootQuery: {
        test: function (root, args, context, info) {
            return Promise.resolve('Test is OK');
        }
    }
};
