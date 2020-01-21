import React, { Component } from 'react';
import Login from './Login.jsx';
import Signup from './Signup.jsx';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1> Hello React App!!</h1>
        <Login />
        <Signup />
      </div>
    );
  }
}

export default App;
