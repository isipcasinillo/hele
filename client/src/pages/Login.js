import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login] = useMutation(LOGIN_USER);
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
    console.log(formState);

    try {
      const { data } = await login({
        variables: { ...formState },
      });
      console.log(data)
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        className="form-input"
        placeholder="Your email"
        name="email"
        type="email"
        value={formState.email}
        onChange={handleChange}
      />
      <input
        className="form-input"
        placeholder="******"
        name="password"
        type="password"
        value={formState.password}
        onChange={handleChange}
      />
      <button
        className="btn btn-block btn-primary"
        style={{ cursor: 'pointer' }}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Login;
