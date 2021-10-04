import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand fw-bolder" to="#">Study Point</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link ms-5" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ms-5" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ms-5" to="/service">Service</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ms-5" to="/teacher">Teachers</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ms-5" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;
