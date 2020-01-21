import React, { Component } from 'react';
//import { connect } from 'react-redux';

class Login extends Component {
  render() {
    return (
      <div id='loginContainer'>
        <h2>Welcome Back!</h2>
        <p>Don't have an account?
        <button type ='button' className='clickable' onClick={() => this.props.getData()}>Sign Up!</button>
        </p>
        <input id='userEmail' placeholder='Email' type='text' defaultValue={this.props.username} />
        <br />
        <input id='passwordInput' placeholder='Password' type='text' defaultValue={this.props.password} />
        <br />
        <button type ='button' className='clickable' onClick={() => this.props.getData()}>LOG IN</button>
      </div>
    );
  }
}

export default Login;