import React, { Component } from 'react';
import './App.css';
import Game from './components/Game/game'


class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome HotDogSpaceShipTeam</h1>
        <Game/>
      </div>
    )
  }
}

export default App;
