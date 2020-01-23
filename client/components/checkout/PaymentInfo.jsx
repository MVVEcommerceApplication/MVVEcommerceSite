import React from 'react';
import history from './history';
import { PayPalButton } from 'react-paypal-button-v2';

function PaymentInfo() {
  return (
    <div>
        <h2>Payment</h2>

        <PayPalButton
        amount="0.01"
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);
 
          // OPTIONAL: Call your server to save the transaction
          return fetch("/checkout/paypal-transaction-complete", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              orderID: data.orderID
            })
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            history.push('/checkout/confirmation');
          })
        }}
        options={{
          clientId: "AR0CRLoUYenE6Rqc3R91ypys3-OtyFqsxYo_P2lRLrShsyBPQx4lVM9cNvdMUWzA9LaIshcKRh2QiqKS"
        }}
      />
    </div>
  );
}

export default PaymentInfo;