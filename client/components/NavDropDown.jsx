import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Home from './Home.jsx';
import ShoppingCart from './ShoppingCart.jsx';

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
