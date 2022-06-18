const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
  }
  type Bottle {
    _id: ID
    bottleText: String!
    bottleAuthor: String!
    bottleTime: String!
    createdAt: String
    updatedAt: String
  }
  # Authenticate incoming data from create or login
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    getUser(username: String!): User
    getUsers: [User]
    getBottles(BottleAuthor: String): [Bottle]
    getSingleBottle(_id: ID): Bottle
    getBottlesByUser(username: String): User
  }
  type Mutation {
    # Create or login in and return the AUTH type
    createUser(username: String!, email: String!, password: String!): Auth
    # Login user with Auth
    login(email: String!, password: String!): Auth
    # Add new Bottle to Database
    addBottle(
      bottleText: String!
      bottleAuthor: String!
      bottleTime: String!
    ): Bottle
    updateBottle(_id: ID!,bottleText: String, bottleTime: String): Bottle
    removeBottle(_id: ID): Bottle
  }
`;

module.exports = typeDefs;
