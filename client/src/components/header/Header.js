import React, { useState } from 'react';
import Auth from '../../utils/auth';
import { Link } from "react-router-dom";
import './Header.css'
import { GiHamburgerMenu } from 'react-icons/gi'
const Header = () => {
  const [headerState, setHeaderState] = useState(false)
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <>


      {Auth.loggedIn() ? (
        <>
          <div className='header-container'>
            <div className='header-menu'>
              <GiHamburgerMenu onClick={() => setHeaderState(prev => !prev)} />

            </div>

            <div>
              <Link to="/" className='header-home'>Home</Link>
            </div>
            <div>
              {/* <span>Hey there, {Auth.getProfile().data.username}!</span> */}
              <button className="header-signout" onClick={logout}>Sign out</button>
            </div>
          </div>

          <div className={headerState ? 'header-dropdown' : 'dn'}>
            <div>
              <Link className='header-dropdown-home' to="/" onClick={() => setHeaderState(false)}>Home</Link>
            </div>
            <div>
              <button className="header-dropdown-signout" onClick={logout}>Sign out</button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

    </>
  );
};

export default Header;
