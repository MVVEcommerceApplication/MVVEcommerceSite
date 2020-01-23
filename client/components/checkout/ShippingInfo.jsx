import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import history from './history';

function ShippingInfo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [stateInUnitedStates, setStateInUnitedStates] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");


  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetch('/checkout/shipping', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        address,
        apartment,
        city,
        country,
        stateInUnitedStates,
        zip,
        phone
       }),
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
          <input placeholder="Address" type="text" value={address} onChange={e => setAddress(e.target.value)} />
          <input placeholder="Apartment (optional)" type="text" value={apartment} onChange={e => setApartment(e.target.value)} />
          <input placeholder="City" type="text" value={city} onChange={e => setCity(e.target.value)} />
          <input placeholder="State" type="text" value={stateInUnitedStates} onChange={e => setStateInUnitedStates(e.target.value)} />
          <input placeholder="Country" type="text" value={country} onChange={e => setCountry(e.target.value)} />
          <input placeholder="ZIP Code" type="text" value={zip} onChange={e => setZip(e.target.value)} />
          <input placeholder="Phone number" type="text" value={phone} onChange={e => setPhone(e.target.value)} />
          <input type="submit" value="Continue to payment" />
        </form>
      </div>
    </div>
    </div>
  );
}

export default ShippingInfo;