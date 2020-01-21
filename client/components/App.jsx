/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import ShoppingCart from './ShoppingCart.jsx';
import NavDropDown from './NavDropDown.jsx';
import Home from './Home.jsx';
import Hamburger from './Hamburger.jsx';
import style from '../assets/styling/masterStyle.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Main">
        <div className="topNavigation">
          <Hamburger />
          <a href="/cart">
            <span className="glyphicon glyphicon-shopping-cart" />
          </a>
        </div>
        <div id="MainBodyContainer">
          <div>
            <h2>MVV Fashion Shop</h2>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={ShoppingCart} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
