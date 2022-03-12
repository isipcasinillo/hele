import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { BottleProvider } from './utils/BottleContext';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Header from './components/header/Header';
//hello
import 'bootstrap/dist/css/bootstrap.min.css';

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
        {/* < BottleProvider> */}
        <Router>
          <Header />
          <Route exact path="/" component={Home}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/login">
          <Route exact path="/bottle/:id"/>
            <Login />
          </Route>
        </Router>
        {/* </BottleProvider> */}
      </ApolloProvider>
      {/* <Footer /> */}
    </>
  );
}

export default App;
