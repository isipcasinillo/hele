import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/Singup/Signup';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import BottleSingle from './components/BottleSingle/BottleSingle'
import { BottleProvider } from './utils/BottleContext'

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <BottleProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/bottle/:id" element={<BottleSingle />} />
            </Routes>
          </BrowserRouter>
        </BottleProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
