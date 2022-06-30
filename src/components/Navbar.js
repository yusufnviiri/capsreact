import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="dflex">
    <div className="navLogo dflex">
      <img src={logo} alt="" />
      <h3>Space Travelers&apos; Hub</h3>
    </div>
    <ul className="dflex">
      <li><NavLink to="/">Rockets</NavLink></li>
      <li><NavLink to="/missions">Missions</NavLink></li>
      <li><NavLink to="/my-profile">My Profile</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;