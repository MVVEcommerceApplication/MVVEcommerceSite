import React, { Component } from 'react';
import Homepage from './components/Homepage.jsx';

class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <Homepage />
      </div>
    );
  }
}

export default App;
