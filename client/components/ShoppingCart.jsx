import React, { Component, useState, useEffect } from 'react';
import ShoppingCartProduct from './product/ShoppingCartProduct.jsx';


class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      itemName: 'Tote Bag',
      description: 'Designed for anything from grocery shopping to running every day errands, totes are simply a staple of the modern world.',
      quantity: 0,
      price: 14.77,

    };
    this.incCount = this.incCount.bind(this);
  }

  incCount() {
    console.log('COUNTER BUTTON CLICKED!');
    this.setState({
      quantity: this.state.quantity + 1,
    });
  }

  render() {
    return (
      <div>
        <h1>Shopping Cart</h1>
        <div>
          <ShoppingCartProduct
            itemName={this.state.itemName}
            description={this.state.description}
            quantity={this.state.quantity}
            price={this.state.price}
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
          onClick={() => this.incCount()}
        >
          {`Counter ${this.state.quantity}`}
        </button>
      </div>
    );
  }
}


export default ShoppingCart;
