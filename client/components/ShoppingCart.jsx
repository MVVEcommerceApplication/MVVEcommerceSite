import React, { Component, useState } from 'react';
import ShoppingCartProduct from './product/ShoppingCartProduct.jsx';

// eslint-disable-next-line arrow-body-style
const ShoppingCart = () => {
//   const x = 0;
  const [currentProducts, updateCurrent] = useState([{
    itemName: 'Tote Bag',
    description: 'Designed for anything from grocery shopping to running every day errands, totes are simply a staple of the modern world.',
    quantity: 3,
    price: 14.77,
  }]);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        <ShoppingCartProduct
          itemName={currentProducts[0].itemName}
          description={currentProducts[0].description}
          quantity={currentProducts[0].quantity}
          price={currentProducts[0].price}
        />
      </div>
      <div>
        <h5>subtotal: </h5>
      </div>
      <div>
        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
