import React from 'react';
import CheckoutProductList from './CheckoutProductList.jsx';
import CheckoutTotals from './CheckoutTotals.jsx';

function OrderSummary() {
  return (
    <div style={{backgroundColor: "#dae0e0"}}>
      <CheckoutProductList />
      <CheckoutTotals />
    </div>
  );
}

export default OrderSummary;