import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutations';
import Button from 'react-bootstrap/Button';
import Auth from '../utils/auth';

import duck from './duck.png';
const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [createUser, { error, data }] = useMutation(CREATE_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await createUser({
        variables: { ...formState },
      });

      Auth.login(data.createUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="signup-container">
      <div className="card-form">
        <div className="card-container">
          <div>
            <img src={duck} width="300" alt="baby-bottle" height="300" />
          </div>
          <div>
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link href="/">back to the homepage.</Link>
              </p>
            ) : (
              <form
                onSubmit={handleFormSubmit}
                className="formx"
                // style={{
                //   display: 'flex',
                //   flexDirection: 'column',
                //   justifyContent: 'center',
                //   alignItems: 'center',
                //   alignSelf: 'center',
                // }}
              >
                <div
                  style={{
                    marginBottom: '10px',
                    marginTop: '10px',
                  }}
                >
                  Username
                </div>
                <input
                  className="w300"
                  placeholder="  Enter username"
                  name="username"
                  type="text"
                  value={formState.username}
                  onChange={handleChange}
                />
                <div
                  style={{
                    marginBottom: '10px',
                    marginTop: '10px',
                  }}
                >
                  Email
                </div>
                <input
                  className="w300"
                  placeholder="  Enter email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <div
                  style={{
                    marginBottom: '10px',
                    marginTop: '10px',
                  }}
                >
                  Password
                </div>
                <input
                  className="w300"
                  placeholder="  ********"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <div>
                  <Button
                    style={{ cursor: 'pointer', marginTop: '20px' }}
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
                <div
                  style={{
                    fontStyle: 'italic',
                  }}
                >
                  Already have an account?
                  <Link
                    to="/login"
                    style={{
                      fontStyle: 'normal',
                      marginLeft: '3px',
                    }}
                  >
                    Login
                  </Link>
                </div>
              </form>
            )}
            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                Please check your credentials
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
