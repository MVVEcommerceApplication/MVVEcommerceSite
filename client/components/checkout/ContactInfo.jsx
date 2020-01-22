import React from 'react';
import { Link } from 'react-router-dom';

function ContactInfo() {
  return (
    <div>
      <h2>Contact information</h2>
      <p>
        <span>Already have an account?</span>
        &nbsp;
        <Link to="/login">
          <span>Log in</span>
        </Link>
      </p>
      <div>
        <label>Email</label>
        &nbsp;
        <input placeholder="Email" type="email"></input>
      </div>
    </div>
  );
}

export default ContactInfo;