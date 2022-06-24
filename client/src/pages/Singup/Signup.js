import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import './Signup.css';

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
    <>
      <div className="signup-container">
        <div>
          <div className='signup-font24 signup-padding-top-24 s'>
            Sign up
          </div>
        </div>
        <div>
          {data ? (
            <p>
              Success! You are now being directed
            </p>
          ) : (
            <form
              onSubmit={handleFormSubmit}
            >
              <div
                className='signup-font16 signup-padding-top-22 '
              >
                Username
              </div>
              <div className='signup-padding-top-8'>
                <input
                  className="signup-input"
                  placeholder="Enter username"
                  name="username"
                  type="text"
                  value={formState.username}
                  onChange={handleChange}
                />
              </div>

              <div
                className='signup-font16 signup-padding-top-8'
              >
                Email
              </div>
              <div className='signup-padding-top-8'>
                <input
                  className="signup-input"
                  placeholder="Enter email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
              </div>

              <div
                className='signup-font16 signup-padding-top-8'
              >
                Password
              </div>
              <div className='signup-padding-top-8'>
                <input
                  className="signup-input"
                  placeholder="********"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="signup-submit"
              >
                Submit
              </button>
              <div
                className='signup-font16 signup-padding-top-16'
              >
                Already have an account?
                <Link
                  to="/login"
                  className='signup-font16 signup-padding-left-8'
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
    </>
  );
};

export default Signup;
