import React from 'react';
import Auth from '../../utils/auth';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css'
const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <>

      <Navbar bg="primary" variant="dark">
        <Container>
        {Auth.loggedIn() ? (
          <>
            <Nav className="me-auto">
              <Link to="/" className='home'>Home</Link>
            </Nav>
            <div>
            <span>Hey there, {Auth.getProfile().data.username}!</span>
            <Button onClick={logout}>Logout</Button>
            </div>
          </>
            ) : (
              <></>
            )}
        
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
