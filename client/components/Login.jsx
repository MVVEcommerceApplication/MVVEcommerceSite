import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
  render() {
    return (
      <div id='loginContainer'>
        <input id='usernameInput' placeholder='username' type='text' defaultValue={this.props.username} />
        <br />
        <input id='passwordInput' placeholder='password' type='text' defaultValue={this.props.password} />
        <br  />
        <button type ='button' className='clickable' onClick={() => this.props.getData()}>SUBMIT</button>
      </div>
    );
  }
}

export default Login;