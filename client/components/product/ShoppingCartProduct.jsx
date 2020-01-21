/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from 'react';

const ShoppingCartProduct = (props) => (
        <div>
            <h3>
                {props.itemName}
                <br />
                {props.description}
                <br />
                quantity:
{' '}
{props.quantity}
                <br />
                Price: $
{props.price}

            </h3>
        </div>
);

export default ShoppingCartProduct;
