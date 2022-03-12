import React from 'react';
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
              <></>
            )}
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
