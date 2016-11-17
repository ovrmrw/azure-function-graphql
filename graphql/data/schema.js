"use strict";
////////////////////////////// SCHEMA ////////////////////////////// 
exports.schema = ["\n  # type definition of User \ntype User {\n  id: ID!\n  name: String!\n  age: Int\n  address: Address\n    # other users who current user follows.\n  follow(first: Int): [User]\n    # current user's hobbies.\n  hobby(first: Int): [Hobby]\n}\ntype Address {\n  zip: String\n  street: String\n}\ntype Hobby {\n  id: ID!\n  name: String!\n}\ntype RootQuery {\n  users: [User]\n  user(id: ID!): User\n}\nschema {\n  query: RootQuery\n}\n"];
exports.schema2 = "\ntype RootQuery {\n  test: String\n}\n\nschema {\n  query: RootQuery\n}\n";
