import React from 'react';
import Auth from '../../utils/auth';
import Login from '../Login/Login';
import './Home.css';
import BottleForm from '../../components/BottleForm/BottleForm';
import BottleList from '../../components/BottleList/BottleList';
import Dashboard from '../../components/Dashboard/Dashboard';
import DateSlider from '../../components/DateSlider/DateSlider';
const Home = () => {
  return (
    <>
      {Auth.loggedIn() ? (
        <div className="container">
          <div className="layout-dateslider" >
            <DateSlider />
          </div>
          <div className="layout-dashboard" >
            <Dashboard />
          </div>
          <div className="layout-bottleform" >
            <BottleForm />
          </div>
          <div className="layout-bottlelist" >
            <BottleList />
          </div>
        </div>
      ) : (
        <Login />
      )}

    </>
  );
};

export default Home;
