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
import style from '../assets/styling/masterStyle.css';
import Signup from '../components/Authentication/Signup.jsx';
import Login from '../components/Authentication/Login.jsx';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Main">
        <div className="topNavigation">
          <Hamburger />
          <a href="/">
            <Link to="/cart">
              <span className="glyphicon glyphicon-shopping-cart" />
            </Link>
          </a>
        </div>
        <div id="MainBodyContainer">
          <div>
            <h2>MVV Fashion Shop</h2>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/cart" component={ShoppingCart} />
            <Route exact path="/checkout" component={CheckoutContainer} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;