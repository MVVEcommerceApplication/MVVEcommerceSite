import React, { Component } from 'react';


class Signup extends Component {
  render() {
    return (
      <div id='signUpContainer'>
        <h2>New Here?</h2>
        <p>Already have an account?<button type ='button' className='clickable' onClick={() => this.props.getData()}>Log In!</button>
        </p>
        <input id='firstNameInput' placeholder='First Name' type='text' defaulValue={this.props.firstName} />
        <br />
        <input id='lastNameInput' placeholder='Last Name' type='text' defaultValue={this.props.lastName} />
        <br />
        <input id='userAddress' placeholder='Address' type='text' defaultValue={this.props.userAddress} />
        <br />
        <input id='userEmail' placeholder='Email' type='text' defaultValue={this.props.email} />
        <br />
        <button type ='button' className='clickable' onClick={() => this.props.getData()}>SIGN UP</button>
      </div>
    );
  }
}

export default Signup;