import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange ({target}) {
  //   this.setState({ [target.name] : target.value });
  //   console.log('****in handlechange func', target.value);
  // }

  handlePasswordChange(event){
    this.setState({password: event.target.value});
  }

  handleUserNameChange(event){
    this.setState({email: event.target.value});
  }

  handleSubmit(event){
    // * prevent page from reloading upon hitting submit button
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    const body = { email, password };

    fetch('/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(body),
    })
    .then((res) => res.json())
    .then(() => {
      console.log('Login was susccessful!');
    })
    .catch((err) =>{
      console.log('Login was not successful, please check username or password.');
    })
  }

  render() {
    return (
      <div id='loginContainer'>
        <h2>Welcome Back!</h2>
        <p>Don't have an account?
        <Link to="/signup">
          <span>
          Sign-Up!
          </span>
        </Link>
        </p>
        <form>
        <input id='username' placeholder='Email' type='email' value={this.state.email} onChange={this.handleUserNameChange} />
        <br />
        <input id='password' placeholder='Password' type='password' value={this.state.password} onChange={this.handlePasswordChange} />
        <br />
        <button type ='button' className='clickable' onClick={(event) => this.handleSubmit(event) }>LOG IN</button>
      </form>
      </div>
    );
  }
}

export default Login;