import React from 'react';

function ShippingInfo() {
  return (
    <div>
    <div>
      <h2>Shipping address</h2>
      <div>
        <label>First name</label>
        &nbsp;
        <input placeholder="First name" type="text"></input>
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