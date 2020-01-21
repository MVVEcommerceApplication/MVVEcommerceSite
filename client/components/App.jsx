import React, { Component } from 'react';
import Login from './Authentication/Login.jsx/index.js';
import Signup from './Authentication/Signup.jsx/index.js';

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
