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
    <>
      <div className="login-container">
        <div>
          <div className='login-font24 login-padding-top-24 l'>
            Login
          </div>
        </div>
        <div>
          {data ? (
            <p>
              Success! You may now head{' '}
              <Link to="/">back to the homepage.</Link>
            </p>
          ) : (
            <form onSubmit={handleFormSubmit} className="signup-form">
              <div className='login-font16 login-padding-top-22 '>
                Email
              </div>
              <div className='login-padding-top-8'>
                <input
                  className="login-input "
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
              </div>

              <div className='login-padding-top-8'>
                Password
              </div>
              <div className='login-padding-top-8'>
                <input
                  className="login-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
              </div>

              <div>
                <button
                  className='login-submit'>
                  Submit
                </button>
              </div>
              <div className='login-padding-top-8'>
                Don't have an account?
                <Link
                  className='login-padding-left-8'
                  to="/signup">
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
    </>
  );
};

export default Login;
