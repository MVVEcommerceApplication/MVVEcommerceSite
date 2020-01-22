import React from 'react';

function PaymentInfo() {
  return (
    <div>
      <div>
        <h2>Payment</h2>
        <div>
        <input type="radio"></input>
        <span>Credit card</span>
        </div>
        <div>
        <div>
        <input placeholder="Card number" type="text"></input>
        </div>
        <div>
        <input placeholder="Name on card" type="text"></input>
        </div>
        <div>
        <input placeholder="Expiration date (MM/YY)" type="text"></input>
        </div>
        <div>
        <input placeholder="Security code" type="text"></input>
        </div>
        </div>
      </div>
      <div>
        <h2>Billing address</h2>
        <div>
        <input type="radio"></input>
        <span>Same as shipping address</span>
        </div>
        <div>
        <input type="radio"></input>
        <span>Use a different billing address</span>
        </div>
      </div>
      <div>
        <h2>Remember me</h2>
        <div>
        <input type="checkbox"></input>
        <span>Save my information for a faster checkout</span>
        </div>
        <div>
          <button type="submit">
            <span>Pay now</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentInfo;