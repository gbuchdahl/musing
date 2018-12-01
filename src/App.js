import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      password: '',
      usertype: '',
      username: ''
    }
    this.handleChange = this.handleChange.bind(this);
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
            <form>
              <input type="text" name="firstname" placeholder="First Name" onChange={this.handleChange} value={this.state.firstname}/>
              <input type="text" name="lastname" placeholder="Last Name" onChange={this.handleChange} value={this.state.lastname}/>
              <input type="text" name="username" placeholder="Username" onChange={this.handleChange} value={this.state.username}/>
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

}

export default App;
