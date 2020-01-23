/* eslint-disable react/prefer-stateless-function */
import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { json } from 'body-parser';
import ShoppingCartProduct from './ShoppingCartProduct.jsx';
import * as actions from '../../actions/actions';
import ProductInfo from './ProductInfoComponent.jsx';

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
      if (localStorage.getItem(keys[i]) === 'INFO') continue;
      // loop through values and extract

      const productValuesArray = localStorage.getItem(keys[i]);
      console.log('productValuesArray', productValuesArray);

      this.state.push(JSON.parse(productValuesArray));
      
      // productValuesArray.forEach((prodDetails) => this.state.push(prodDetails));
    }

    console.log('VALUES FROM LOCAL STORAGE NOW IN STATE', this.state);
    // pass props properly to component
    const cartItem = this.state.map((item, index) => (
      <ProductInfo
        image={this.state[index].image}
        key={index}
        description={this.state[index].description}
        itemName={this.state[index].itemName}
        price={this.state[index].price}
      />
    ));
    return (
      <div>
        <h1>Shopping Cart</h1>
        <div>
          {cartItem}
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
