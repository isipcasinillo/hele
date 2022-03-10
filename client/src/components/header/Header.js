import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

import { Button } from 'react-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';
const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          <div>
            {Auth.loggedIn() ? (
              <>
                <span>Hey there, {Auth.getProfile().data.username}!</span>
                <Button onClick={logout}>Logout</Button>
              </>
            ) : (
              <>
                {/* <Link className="btn btn-lg btn-info m-2" to="/login">
              Login
            </Link>
            <Link className="btn btn-lg btn-light m-2" to="/signup">
              Signup
            </Link> */}
              </>
            )}
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
