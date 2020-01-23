import React from 'react';
import { Link } from 'react-router-dom';

function CheckoutNavBar() {
  return (
    <div>
      <nav>
        <Link to="/checkout/information">
          <span>
          Information
          </span>
        </Link>
        &nbsp; > &nbsp;
        <Link to="/checkout/shipping">
          <span>
          Shipping
          </span>
        </Link>
        &nbsp; > &nbsp;
        <Link to="/checkout/payment">
          <span>
          Payment
          </span>
        </Link>
      </nav>
    </div>
  );
}

export default CheckoutNavBar;