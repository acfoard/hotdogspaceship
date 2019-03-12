import React, { Component } from 'react';
import './App.css';
import Game from './components/Game/game'
import Login from './components/LoginPage'
import GameList from './components/GamePage'
import {BrowserRouter, Route} from "react-router-dom";
import Comment from "./components/Comments"


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>

          <Route exact path="/" component={Login} />
          <Route path="/comments" component={Comment}/>
          <Route path="/games" component={GameList} />
          <Route path="/game" component={Game} />

        </div>
      </BrowserRouter>
    )
  }
}

export default App;
