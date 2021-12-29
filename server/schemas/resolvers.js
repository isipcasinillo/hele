const { gql } = require('apollo-server-express');

const resolvers = {
  Query: {
    hello: () => 'this is a string!',
  },
  Mutation: {
    createUser: async (parent  )
  },
};

module.exports = resolvers;
