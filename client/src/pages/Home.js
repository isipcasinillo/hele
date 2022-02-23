import React from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_BOTTLES } from '../utils/query';
import BottleList from '../components/BottleList/BottleList';
import BottleForm from '../components/BottleForm/BottleForm';

const Home = () => {
  return (
    <>
      {Auth.loggedIn() ? (
        <>
          <BottleForm />
          <BottleList />
        </>
      ) : (
        <div>Please Log In</div>
      )}
    </>
  );
};

export default Home;
