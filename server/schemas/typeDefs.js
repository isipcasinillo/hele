const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }
  type Query {
    hello: String!
  }
  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
  }
`;

module.exports = typeDefs;
  