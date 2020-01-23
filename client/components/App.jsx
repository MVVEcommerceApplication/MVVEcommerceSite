/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { connect } from 'react-redux';
import CheckoutContainer from './checkout/CheckoutContainer.jsx';
import ShoppingCart from './ShoppingCart.jsx';
import NavDropDown from './NavDropDown.jsx';
import Home from './Home.jsx';
import Hamburger from './Hamburger.jsx';
import style from '../assets/styling/masterStyle.css';
import reducers from '../reducers/index.js';
import storeReducer from '../reducers/storeReducer.js';
import * as actions from '../actions/actions';
import Signup from './Authentication/Signup.jsx';
import Login from './Authentication/Login.jsx';
import history from './Authentication/history'

const mapStateToProps = (state) => ({
  // add pertinent state here
  // someData
  // quantity: state.quantity,
  ...state,
});
// const mapStateToProps = (state) => {
//   console.log('im the state:', state);
//   return { foo: state.store.quantity };
// };
const mapDispatchToProps = (dispatch) => ({
  // create functions that will dispatch action creators
  addQuantity: () => dispatch(actions.addQuantity()),
});
class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('THIS IS ALL PROPS: ', this.props);
  }

  render() {
    return (
      <Router history={history}>
        <div className="Main">
          <div className="topNavigation">
            <Hamburger />
            <Link to="/cart">
              <span className="glyphicon glyphicon-shopping-cart" />
            </Link>
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
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
