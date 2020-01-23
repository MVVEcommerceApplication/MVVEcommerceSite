import React from 'react';
import CheckoutProductList from './CheckoutProductList.jsx';
import CheckoutTotals from './CheckoutTotals.jsx';

function OrderSummary() {
  return (
    <div>Order Summary
      <CheckoutProductList />
      <CheckoutTotals />
    </div>
  );
}

export default OrderSummary;