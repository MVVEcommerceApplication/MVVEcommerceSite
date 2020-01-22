/* eslint-disable react/prefer-stateless-function */
import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ShoppingCartProduct from './product/ShoppingCartProduct.jsx';
import * as actions from '../actions/actions';
import { Link } from 'react-router-dom';

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
  addQuantity: (quantity) => dispatch(actions.addQuantity(quantity)),
});

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Shopping Cart</h1>
        <div>
          <ShoppingCartProduct
            itemName={this.props.store.itemName}
            description={this.props.store.description}
            quantity={this.props.store.quantity}
            price={this.props.store.price}
          />
        </div>
        <div>
          <h5>subtotal: </h5>
        </div>
        <div>
          <button type="button">
            Proceed to Checkout
          </button>
        </div>
        <button
          type="button"
          onClick={() => this.props.addQuantity(5)}
        >
          Increment Quantity
        </button>
      <Link to="/checkout">
      <button>Proceed to checkout</button>
      </Link>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
