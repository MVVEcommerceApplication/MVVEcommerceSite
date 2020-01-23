import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import history from './history';


class Signup extends Component {
  constructor(props){
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    };

    this.handlefirstNameChange = this.handlefirstNameChange.bind(this);
    this.handlelastNameChange = this.handlelastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlepasswordChange = this.handlepasswordChange.bind(this);
  }

  handlefirstNameChange(event){
    this.setState({firstname: event.target.value});
  }

  handlelastNameChange(event){
    this.setState({lastname: event.target.value});
  }

  handleEmailChange(event){
    //console.log('in the emailChange:', event.target.value);
    this.setState({email: event.target.value});
  }

  handlepasswordChange(event){
    this.setState({password: event.target.value});
  }

  handleSubmit(event){
    // * prevent page from reloading upon hitting submit button
    event.preventDefault();
    const firstname = this.state.firstname;
    const lastname = this.state.lastname;
    const email = this.state.email;
    const password = this.state.password;
    const body = { firstname, lastname, email, password, body };

    fetch('/signup', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(body),
    })
    .then((res) => res.json())
    .then(() => {
      console.log('Signup was susccessful!');
      history.push('/');
    })
    .catch((err) =>{
      console.log('Signup was not successful ;(');
    })
  }

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
        <form>
        <input id='firstName' placeholder='First Name' type='text' value={this.state.firstname} onChange={this.handlefirstNameChange} />
        <br />
        <input id='lastName' placeholder='Last Name' type='text' value={this.state.lastname} onChange={this.handlelastNameChange} />
        <br />
        <input id='email' placeholder='Email' type='email' value={this.state.email} onChange={this.handleEmailChange} />
        <br />
        <input id='password' placeholder='Password' type='password' value={this.state.password} onChange={this.handlepasswordChange} />
        <br />
        <button type ='button' className='clickable' onClick={(event) => this.handleSubmit(event)}>SIGN UP</button>
      </form>
      </div>
    );
  }
}

export default Signup;