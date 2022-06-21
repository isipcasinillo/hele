import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { LOGIN_USER } from '../utils/mutations';
import Button from 'react-bootstrap/Button';
import Auth from '../utils/auth';
import './Login.css';
import duck from './duck.png';
const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // updates the UI with every change of the state ((every letter is added))
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // when the form is submitted it will call in Auth
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
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
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit} className="formx">
                <div
                  style={{
                    marginBottom: '10px',
                    marginTop: '10px',
                  }}
                >
                  Email
                </div>
                <input
                  className="form-input"
                  placeholder="Your email"
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
                  className="form-input"
                  placeholder="******"
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
                  Don't have an account?
                  <Link
                    to="/signup"
                    style={{
                      fontStyle: 'normal',
                      marginLeft: '3px',
                    }}
                  >
                    Sign-up
                  </Link>
                </div>
              </form>
            )}
            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
