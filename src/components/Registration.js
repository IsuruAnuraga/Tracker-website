import React, { useState } from 'react';
import Api_service from '../Services/Api_service';

function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const registrationData = {
      username: name,
      email: email,
      password: password
    };

    try {
      const response = await Api_service.call('/api/auth/register', 'POST', registrationData);
      if (response.message === 'User registered successfully') {
        window.location.href = '/login';
      }
    } catch (error) {
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="">
      <div className="row min-vh-100">
        <div className="col-6 d-flex">
          <div style={{ backgroundColor: 'blue' }} className="w-100 h-100"></div>
        </div>

        <div className="col-6 d-flex align-items-center">
          <div style={{ width: "100%" }}>
            <h2 className='text-center pb-3'><b> Package Tracker </b></h2>
            <h4 className='text-center pb-3'> Create a new account </h4>
            <form className="w-75 mx-auto" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 mt-3">Sign up</button>
              <div className='mt-2'>If you already have an account, <b><a href="/login">Sign in </a> </b>to get started</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
