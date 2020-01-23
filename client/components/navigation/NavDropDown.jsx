import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line arrow-body-style
const NavDropDown = () => {
//   const x = 0;

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Shopping Cart</Link></li>
          <li><Link to="/signup">Sign-Up</Link></li>
          <li><Link to="/login">Log-In</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavDropDown;
