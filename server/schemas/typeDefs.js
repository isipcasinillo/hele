const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    bottles: [Bottle]
  }
  type Bottle {
    _id: ID
    bottleText: String!
    date: String
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
    getBottleByDate(date: String, bottleAuthor: String): [Bottle]
    getUser(username: String!): User
    getSingleBottle(_id: ID): Bottle
  }
  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBottle(
      bottleText: String!
      bottleAuthor: String!
      bottleTime: String!
      date: String
    ): Bottle
    updateBottle( _id: ID! bottleText: String! bottleTime: String!): Bottle
    removeBottle(_id: ID): Bottle

  }
`;

module.exports = typeDefs;
