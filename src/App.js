import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
              <input type="text" name="firstname" placeholder="First Name"/>
              <input type="text" name="lastname" placeholder="Last Name"/>
              <input type="text" name="username" placeholder="Username"/>
              <input type="text" name="password" placeholder="Password"/>
              {/*radio button>*/}
              <input type="radio" id="userType1" name="usertype" value="student"/>
              <label for="userType1">Student</label>

              <input type="radio" id="userType2"name="usertype" value="teacher"/>
              <label for="userType2">Teacher</label>

              <button>Register</button>
            </form>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
