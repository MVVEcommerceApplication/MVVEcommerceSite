/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart.jsx';
import NavDropDown from './components/NavDropDown.jsx';
import Home from './components/Home.jsx';
import Hamburger from './components/Hamburger.jsx';

class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    const styles = {
      container: {
        border: '1px black solid',
        width: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px',
      },
    };
    return (
      <div>
        <div className="header" />
        <Hamburger />
        <div className="main-content" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={ShoppingCart} />
        </Switch>

      </div>
    );
  }
}

export default App;
