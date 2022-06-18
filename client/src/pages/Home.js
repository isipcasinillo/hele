import React from 'react';
import Auth from '../utils/auth';
import Login from './Login';
import './Home.css';
import BottleForm from '../components/BottleForm/BottleForm';
import BottleList from '../components/BottleList/BottleList';
import Dashboard from '../components/Dashboard/Dashboard';
const Home = () => {
  return (
    <div className="homewrap">
      {Auth.loggedIn() ? (
        <>
        <div>
          <Dashboard/>
          <BottleForm/> 
        </div>
          <BottleList/> 
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Home;
