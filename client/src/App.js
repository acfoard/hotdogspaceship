import React, { Component } from 'react';
import './App.css';
import Login from './components/LoginPage';
import ProfilePage from './components/ProfilePage';

class App extends Component {
  render() {
    return (
      <div>
        <Login/>

        <ProfilePage/>
      </div>
    )
  }
}

export default App;
