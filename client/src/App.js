import React, { Component } from 'react';
import './App.css';
import Game from './components/Game/game'
import Login from './components/LoginPage'
import {BrowserRouter, Route} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Login} />
          <Route path="/game" component={Game} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
