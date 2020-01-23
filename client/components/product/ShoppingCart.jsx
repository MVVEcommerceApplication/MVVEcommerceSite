/* eslint-disable react/prefer-stateless-function */
import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { json } from 'body-parser';
import * as actions from '../../actions/actions';
import ProductInfo from './ProductInfoComponent.jsx';
import ShoppingCartProduct from './ShoppingCartProduct.jsx';

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
    this.state = [];
  }


  render() {
    console.log('SHOPPING CART MOUNTED!!');
    // pull down local storage


    // fill state with pertinent local storage
    const keys = Object.keys(localStorage);
    let i = keys.length;

    while (i--) {
      // webdev server local storage data scrub
      if (localStorage.getItem(keys[i]) === 'INFO') continue;

      // assign arrays to variable product values
      const productValuesArray = localStorage.getItem(keys[i]);

      // remove paypal storage from shopping cart instance - quick fix edge case bug
      if (!JSON.parse(productValuesArray).id) this.state.push(JSON.parse(productValuesArray));
    }

    console.log('VALUES FROM LOCAL STORAGE NOW IN STATE', this.state);
    // pass props properly to component
    const cartItem = this.state.map((item, index) => (
      <ShoppingCartProduct
        image={this.state[index].image}
        key={index}
        description={this.state[index].description}
        itemName={this.state[index].itemName}
        price={this.state[index].price}
      />
    ));
    return (
      <div id="MainBodyContainer">
        <h1>Shopping Cart</h1>
        <div>
          {cartItem}
        </div>
        <div>
          <h5>subtotal: </h5>
        </div>
        <div />
        <Link to="/checkout">
          <button>Proceed to checkout</button>
        </Link>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
