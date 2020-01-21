import React, { Component } from 'react';
import CheckoutContainer from './checkout/CheckoutContainer.jsx';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1> Hello React App!!</h1>
        <div>
          <CheckoutContainer />
        </div>
      </div>
    );
  }
}

export default App;