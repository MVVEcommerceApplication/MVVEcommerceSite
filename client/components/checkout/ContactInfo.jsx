import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import history from './history';

function ContactInfo() {
  const [email, setEmail] = useState("");
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        // console.log(email)
        fetch('/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email: email}),
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          history.push('/checkout/shipping');
        })
    }
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
      <form onSubmit={handleSubmit}>
          <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
}

export default ContactInfo;