import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import history from './history';

function ShippingInfo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetch('/checkout/shipping', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName }),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      history.push('/checkout/payment');
    })
}

  return (
    <div>
    <div>
      <h2>Shipping address</h2>
      <div>
      <form onSubmit={handleSubmit}>
          <input placeholder="First name" type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
          <input placeholder="Last name" type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
          <input type="submit" value="Continue to payment" />
        </form>
        {/* <label>First name</label>
        &nbsp;
        <input placeholder="First name" type="text"></input> */}
      </div>
      <div>
        <label>Last name</label>
        &nbsp;
        <input placeholder="Last name" type="text"></input>
      </div>
      <div>
        <label>Address</label>
        &nbsp;
        <input placeholder="Address" type="text"></input>
      </div>
      <div>
        <label>Apartment, suite, etc. (optional)</label>
        &nbsp;
        <input placeholder="Apartment, suite, etc. (optional)" type="text"></input>
      </div>
      <div>
        <label>City</label>
        &nbsp;
        <input placeholder="City" type="text"></input>
      </div>
      <div>
        <label>Country/Region</label>
        &nbsp;
        <select size="1">
          <option data-code="US" value="United States">United States</option>
        </select>
      </div>
      <div>
        <label>State</label>
        &nbsp;
        <select size="1">
          <option data-alternate-values="New York" value="NY">New York</option>
        </select>
      </div>
      <div>
        <label>ZIP code</label>
        &nbsp;
        <input placeholder="ZIP code" type="text"></input>
      </div>
      <div>
        <label>Phone</label>
        &nbsp;
        <input placeholder="Phone" type="text"></input>
      </div>
    </div>
    <div>
      <h4>Shipping method</h4>
      <div>
        <input type="radio"></input>
        <span>Flat Rate Shipping</span>
        &nbsp;
        <span>Price</span>
      </div>
      <div>
      <input type="radio"></input>
        <span>USPS Regular Mail</span>
        &nbsp;
        <span>Price</span>
      </div>
    </div>
    </div>
  );
}

export default ShippingInfo;