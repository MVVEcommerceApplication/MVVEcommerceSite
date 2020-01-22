import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Signup extends Component {
  // constructor(props){
  //   super(props);

  //   this.state = {
  //     firstNameInput: '',
  //     lastNameInput: '',
  //     userEmail: ''
  //   };
  // }

  // handleChange= ({target}) => {
  //   this.setState({ [target.name] : target.value });
  // }
  render() {

    return (
      <div id='signUpContainer'>
        <h2>New Here?</h2>
        <p>Already have an account? 
          <Link to="/login">
          <span>
           Login
          </span>
        </Link>
        </p>
        <input id='firstNameInput' placeholder='First Name' type='text' onChange={(event) => handleChange(event.target.value)} defaulValue={this.props.firstName} />
        <br />
        <input id='lastNameInput' placeholder='Last Name' type='text' defaultValue={this.props.lastName} />
        <br />
        <input id='userEmail' placeholder='Email' type='email' defaultValue={this.props.email} />
        <br />
        <button type ='button' className='clickable' onClick={(event) => this.props.getData()}>SIGN UP</button>
      </div>
    );
  }
}

export default Signup;