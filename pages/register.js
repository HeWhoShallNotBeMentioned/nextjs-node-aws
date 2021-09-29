import React, { useState } from 'react';
import Layout from '../components/Layout';

const Register = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: '',
    buttonText: 'Register',
  });

  const registerForm = () => {
    return (
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Type your name"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Type your email"
          />{' '}
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Type your password"
          />
        </div>
        <div className="form-group">
          <button className="btn btn-outline-secondary">Register</button>
        </div>
      </form>
    );
  };

  return (
    <Layout>
      <div className="col-md-6 offset-md-3">
        <h1>Register</h1>
        <br />
        {registerForm()}
      </div>
    </Layout>
  );
};

export default Register;
