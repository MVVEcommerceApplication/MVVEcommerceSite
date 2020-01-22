import React from 'react';
import OrderSummary from './OrderSummary.jsx'
import ContactInfo from './ContactInfo.jsx';
import ShippingInfo from './ShippingInfo.jsx';
import PaymentInfo from './PaymentInfo.jsx';
import CheckoutNavBar from './CheckoutNavBar.jsx';

// Using a functional component with a React Hook
// App will provide state to all components and will include React Router for dynamic routes and rendering
// Checkout will also include React Router for dynamic routes and rendering: ContactInfo, ShippingInfo, PaymentInfo

function CheckoutContainer() {
  return (
    <div className="singleItem">
      <CheckoutNavBar />
      <OrderSummary />
      <ContactInfo />
      <ShippingInfo />
      <PaymentInfo />
    </div>
  );
}

export default CheckoutContainer;