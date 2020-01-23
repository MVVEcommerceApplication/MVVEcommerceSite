import React, { Component } from 'react';

const ProductInfo = (props) => {
  const x = 0;

  const productName = JSON.stringify(props.itemName);
  const productInfo = JSON.stringify(props);
  console.warn('THIS IS PROD NAME!', productName);
  console.warn('THIS IS PROPS!', props);

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
          <button onClick={() => { onAddCartClick(); }} type="button">Add To Cart</button>
        </span>
      </div>
    </div>


  );
};


export default ProductInfo;
