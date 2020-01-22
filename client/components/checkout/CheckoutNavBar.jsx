import React from 'react';
import { Link } from 'react-router-dom';

function CheckoutNavBar() {
  return (
    <div style={{backgroundColor: "#e1e8e8"}}>
      <nav>
        <Link to="/cart">
          <span>
          Cart
          </span>
        </Link>
        >
       <a>Information</a> >
       <a>Shipping</a> >
       <a>Payment</a>
      </nav>
    </div>
  );
}

export default CheckoutNavBar;