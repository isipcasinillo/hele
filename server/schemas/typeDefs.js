const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
  }
  # Authenticate incoming data from create or login
  type Auth {
    token: ID!
    profile: Profile
  }
  type Query {
    getUsers: [User]
  }
  type Mutation {
    # Create or login in and return the AUTH type
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
  