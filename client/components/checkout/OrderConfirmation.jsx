import React, { Component } from 'react';


class orderConfirmation extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log('ORDER CONFIRMATION MOUNTED!!');
    localStorage.clear();
  }

  render() {
    return (
      <div>
        <br />
          Your order has been placed - you will be receiving a confirmation email shortly
      </div>
    );
  }
}

export default orderConfirmation;
