import React, { useState, useReducer, useEffect } from 'react';
import Auth from '../utils/auth';
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
