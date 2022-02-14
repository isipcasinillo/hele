import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

import Button from 'react-bootstrap/button';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <>
      <div>This is the Header</div>
      <div>
        {Auth.loggedIn() ? (
          <span>you are logged in</span>
        ) : (
          <>
            <span>you are logged out</span>
            <Link className="btn btn-lg btn-info m-2" to="/login">
              Login
            </Link>
            <Link className="btn btn-lg btn-light m-2" to="/signup">
              Signup
            </Link>
          </>
        )}
      </div>
      <Button onClick={logout}>Logout</Button>
    </>
  );
};

export default Header;
