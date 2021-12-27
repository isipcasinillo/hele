// set up express server
const express = require('express');
// path for interacting with file's directory easily
const path = require('path');
// inquiring the Apollo-server-express that connects express and GraphQl
const { ApolloServer } = require('apollo-server-express');
import { typeDefs, resolvers } from ('./schemas');
// imports the mongoose db
const db = require('./config/connection');
const app = express();
// port used for the server or using localhost 3001
const PORT = process.env.PORT || 3001;

// runs instance of Apollo Server and uses parameters
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.applyMiddleware({ app });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

// sends all other request to the home page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`)
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
    })
})