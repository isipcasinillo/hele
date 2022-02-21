const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    bottles: [Bottle]!
  }
  type Bottle {
    _id: ID
    bottleText: String
    bottleAuthor: String
    createdAt: String
  }
  # Authenticate incoming data from create or login
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    getUser(username: String!): User
    getUsers: [User]
    getBottles(id: String): [Bottle]
  }
  type Mutation {
    # Create or login in and return the AUTH type
    createUser(username: String!, email: String!, password: String!): Auth
    # Login user with Auth
    login(email: String!, password: String!): Auth
    # Add new Bottle to Database
    addBottle(bottleText: String!, bottleAuthor: String!): Bottle
  }
`;

module.exports = typeDefs;
