const { gql } = require('apollo-server-express')

const typeDefs = gql`
type User {
    _id: ID!
    username: String
    email: String
    password: String
    diapers: [Diaper]
    foods: [Food]
}

type Diaper {
    _id: String
    timestamp: String
}

type Food {
    _id: String
    timestamp: String
}

type Query {

}

type Mutation {

}
`