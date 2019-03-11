import React, { Component } from 'react';
import './App.css';
import Login from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import Game from './components/Game/game'
import { BrowserRouter, Route } from "react-router-dom";


class App extends Component {
  render() {
    return <div>
      <div>
        <Login />
        <ProfilePage />
      </div>
      <BrowserRouter>
        <div>
          <Route path="/" component={Login} />
          <Route path="/game" component={Game} />
        </div>
      </BrowserRouter>
    </div>
  }
}

export default App;
