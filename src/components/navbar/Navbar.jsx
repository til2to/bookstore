import React from 'react';
import { NavLink } from 'react-router-dom';

import menuItems from '../constants';
import './style.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo"><h2>Math Magicians</h2></div>
    <ul className="menu-items">
      {menuItems.map((item) => (
        <li key={item.id}>
          <NavLink to={item.path} activeclassname="active" className="menu-link">
            {item.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
