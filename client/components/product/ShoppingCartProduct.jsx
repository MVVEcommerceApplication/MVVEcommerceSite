import React, { Component } from 'react';

const ShoppingCartProduct = (props) => {
  const productName = JSON.stringify(props.itemName);
  const productInfo = JSON.stringify(props);
  console.log('THIS IS PROD INFO!', productInfo);

  // stringify entire shopping cart
  // const shoppingCart = JSON.stringify({ productName, productInfo });


  function onAddCartClick() {
    console.log('onAddCartClick BUTTON CLICKED!***********');

    localStorage.setItem(productName, productInfo);
  }
  function onRemoveCartClick() {
    console.log('onRemoveCartClick BUTTON CLICKED!***********');
    // remove product from local storage
    localStorage.removeItem(productName);
    // allow iterm removal and page update
    window.location.reload();
  }
  return (
    <div className="container">

      <div className="productBox">
        <img src={props.image} />
        <p>
          {props.itemName}
          {' '}
          {' '}
        </p>
        <p>
          {props.description}
          {' '}
        </p>
        <p>
          {props.price}
          {' '}
        </p>

        <span>
          <label>Quantity: &nbsp;</label>
          <select name="Quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button onClick={() => { onRemoveCartClick(); }} type="button">Remove</button>
        </span>
      </div>
    </div>


  );
};


export default ShoppingCartProduct;
