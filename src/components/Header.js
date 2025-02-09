/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    navigate('/Login');
  };

  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
        <i className="fa fa-bars"></i>
      </button>

      <ul className="navbar-nav ml-auto">

        <div className="topbar-divider d-none d-sm-block"></div>
        <li className="nav-item dropdown no-arrow">

          <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">{localStorage.getItem("user")}</span>
            <img className="img-profile rounded-circle" alt='profile'
              src="img/undraw_profile.svg" />
          </a>

          <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="userDropdown">
            <a className="dropdown-item" href="#" onClick={handleLogoutClick}>
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" style={{ color: "red" }}></i>
              Logout
            </a>
          </div>
        </li>

      </ul>
    </nav>
  );
};

export default Header;
