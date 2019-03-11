import React, { Component } from 'react';
import './App.css';
import Login from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import Game from './components/Game/game'
import GameList from './components/GamePage'
import {BrowserRouter, Route} from "react-router-dom";
import Comment from "./components/Comments"


class App extends Component {
  render() {
    return <div>
      <div>
        <Login />
        <ProfilePage />
      </div>
      <BrowserRouter>
        <div>

          <Route exact path="/" component={Login} />
          <Route path="/comments" component={Comment}/>
          <Route path="/games" component={GameList} />

        </div>
      </BrowserRouter>
    </div>
  }
}

export default App;
