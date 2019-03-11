import React, { Component } from 'react';
import './App.css';
import Login from './components/LoginPage'
import GameList from './components/GamePage'

class App extends Component {
  render() {
    return (
      <div>
        <Login/>
        <GameList />
      </div>
    )
  }
}

export default App;
