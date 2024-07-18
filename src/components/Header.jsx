import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
        <img src="/public/SELHONO.svg" alt="" />
      <nav>
        <ul>
          <li><NavLink  to="/" >Home</NavLink></li>
          <li><NavLink to="/" >Pages</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/project">Project</NavLink></li>
          <li><NavLink  to="/" >Blog</NavLink></li>
          <li><NavLink  to="/" >Contact</NavLink></li>
          <li><img src="/public/Vector (1).svg" alt="" /></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
