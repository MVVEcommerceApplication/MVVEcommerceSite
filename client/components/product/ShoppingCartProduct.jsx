/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from 'react';

const ShoppingCartProduct = (props) => (
        <div className="singleItem">
            <h3>
                {props.itemName}
                <br />
                <hr />
                {props.description}
                <br />
                <hr />
                quantity:
{' '}
{props.quantity}
                <br />
                <hr />
                Price: $
{props.price}

            </h3>
        </div>
);

export default ShoppingCartProduct;
