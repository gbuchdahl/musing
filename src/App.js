import React, { Component } from 'react';
import './App.css';
import fire from './firebase.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      usertype: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <div className="app">
        <header>
          <div className="wrapper">
            <h1>Musing</h1>
          </div>
        </header>
        <div className='container'>
          <section className='add-user'>
            <form onSubmit={this.handleSubmit}>
              <input type="text" name="firstname" placeholder="First Name" onChange={this.handleChange} value={this.state.firstname}/>
              <input type="text" name="lastname" placeholder="Last Name" onChange={this.handleChange} value={this.state.lastname}/>
              <input type="text" name="email" placeholder="Email" onChange={this.handleChange} value={this.state.email}/>
              <input type="text" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password}/>
              {/*radio button>*/}
              <input type="radio" id="userType1" name="usertype" onChange={this.handleChange} value="student"/>
              <label for="userType1">Student</label>

              <input type="radio" id="userType2"name="usertype" onChange={this.handleChange} value="teacher"/>
              <label for="userType2">Teacher</label>

              <button>Register</button>
            </form>
          </section>
        </div>
      </div>
    );
    }

    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    handleSubmit(e) {
      e.preventDefault();
      const usersRef = fire.database().ref('users');
      const user = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        password: this.state.password,
        usertype: this.state.usertype
      }
      usersRef.push(user);
      this.setState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        usertype: ''
      })
    }

}

export default App;
