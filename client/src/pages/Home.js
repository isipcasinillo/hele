import React from 'react';
import Auth from '../utils/auth';
// import BottleList from '../components/BottleList/BottleList';
// import BottleForm from '../components/BottleForm/BottleForm';
import BottleHandle from '../pages/BottleHandle/BottleHandle';

const Home = () => {
  return (
    <>
      {Auth.loggedIn() ? (
        <>
          <BottleHandle />
        </>
      ) : (
        <div>Please Log In</div>
      )}
    </>
  );
};

export default Home;
