import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imgs/logo1.png';

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} className="logo-header" alt="toca-play-logo" height="150" />
      </Link>
    </header>
  );
}

export default Header;
