import React, { Component } from 'react';
import './App.css';
import Game from './components/Game/game'
import Login from './components/LoginPage'
import GameList from './components/GamePage'
import {BrowserRouter, Route} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Login} />
          <Route path="/games" component={GameList} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
