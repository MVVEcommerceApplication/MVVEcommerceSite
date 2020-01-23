import React, { Component } from 'react';

const ProductInfo = (props) => {
  const x = 0;
  // console.warn('This is from Product info component ', props.image);
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
        <p><button type="button">Add to Cart</button></p>
      </div>
    </div>


  );
};


export default ProductInfo;
