import React, { useState } from 'react';
import Api_service from '../Services/Api_service';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = { username: username, password };
    try {
      const response = await Api_service.call('/api/auth/login', 'POST', loginData);

      if (response.message === "Login successful") {
        localStorage.setItem("user", response.user);
        window.location.href = '/dashboard';
      }
    } catch (err) {
      alert('Login failed. Please check your credentials and try again.')
    } finally {
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
            <h2 className='text-center pb-3'><b> Parcel Tracker </b></h2>
            <h4 className='text-center pb-3'> Login to your account </h4>
            <form className="w-75 mx-auto" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(e) => setUsername(e.target.value)}
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

              <button type="submit" className="btn btn-primary w-100 mt-3">Sign in</button>
              <div className='mt-2'>If you don’t have an account, <b><a href="/register">Sign up </a> </b>to get started</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
