import React from 'react';
import Auth from '../utils/auth';
// import BottleList from '../components/BottleList/BottleList';
// import BottleForm from '../components/BottleForm/BottleForm';
import BottleHandle from '../pages/BottleHandle/BottleHandle';
import Signup from './Signup';
import './Home.css';
const Home = () => {
  return (
    <div className="homewrap">
      {Auth.loggedIn() ? (
        <>
          <BottleHandle />
        </>
      ) : (
        <Signup />
      )}
    </div>
  );
};

export default Home;
