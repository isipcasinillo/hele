import React from 'react';
import Auth from '../utils/auth';

import BottleHandle from '../pages/BottleHandle/BottleHandle';
import Login from './Login';
import './Home.css';
const Home = () => {
  return (
    <div className="homewrap">
      {Auth.loggedIn() ? (
        <>
         
          <BottleHandle />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Home;
