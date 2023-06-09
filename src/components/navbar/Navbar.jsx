import '@fortawesome/fontawesome-free/css/all.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { menuItems } from '../navigationsLinks';
import './style.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo"><h2>Bookstore CMS</h2></div>
    <ul className="menu-items">
      {menuItems.map((item) => (
        <li key={item.id}>
          <NavLink to={item.path} activeclassname="active" className="menu-link">
            {item.text}
          </NavLink>
        </li>
      ))}
    </ul>
    <div className="profile">
      <i className="fa fa-user" aria-hidden="true" />
    </div>
  </nav>
);

export default Navbar;
