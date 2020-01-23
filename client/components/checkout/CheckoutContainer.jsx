import React from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom';
import OrderSummary from './OrderSummary.jsx';
import ContactInfo from './ContactInfo.jsx';
import ShippingInfo from './ShippingInfo.jsx';
import PaymentInfo from './PaymentInfo.jsx';
import CheckoutNavBar from './CheckoutNavBar.jsx';
import history from './history'

// Using a functional component with a React Hook
// App will provide state to all components and will include React Router for dynamic routes and rendering
// Checkout will also include React Router for dynamic routes and rendering: ContactInfo, ShippingInfo, PaymentInfo

function CheckoutContainer() {
  return (
    <Router history={history}>
    <div className="singleItem">
      <div id="CheckoutContainer">
        <div>
          <CheckoutNavBar />
          <OrderSummary />
        </div>
        <Switch>
          <Route path="/checkout/information" component={ContactInfo}/>
          <Route exact path="/checkout/shipping" component={ShippingInfo} />
          <Route exact path="/checkout/payment" component={PaymentInfo} />
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default CheckoutContainer;