import React, { Component } from 'react';

const ProductInfo = (props) => {
  const x = 0;
  // console.warn('This is from Product info component ', props.image);
  return (
    <div className="container">

      <div className="productBox">
        <img src={props.image} />
        <p>
          {props.name}
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
          <button type="button">Add To Cart</button>
        </span>
      </div>
    </div>


  );
};


export default ProductInfo;
