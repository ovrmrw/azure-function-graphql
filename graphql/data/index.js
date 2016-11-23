"use strict";
var graphql_tools_1 = require("graphql-tools");
var schema_1 = require("./schema");
var resolvers_1 = require("./resolvers");
var loaders_1 = require("./loaders");
exports.createLoaders = loaders_1.createLoaders;
exports.executableSchema = graphql_tools_1.makeExecutableSchema({
    typeDefs: schema_1.schema,
    resolvers: resolvers_1.resolverMap,
});
exports.executableSchema2 = graphql_tools_1.makeExecutableSchema({
    typeDefs: schema_1.schema2,
    resolvers: resolvers_1.resolverMap2,
});
