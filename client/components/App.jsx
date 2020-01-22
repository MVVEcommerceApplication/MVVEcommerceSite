/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import CheckoutContainer from './checkout/CheckoutContainer.jsx';
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

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Hamburger />
        <h2>MVV Fashion Shop</h2>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={ShoppingCart} />
          <Route exact path="/checkout" component={CheckoutContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;