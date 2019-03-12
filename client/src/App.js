import React, { Component } from 'react';
import './App.css';
//import Game from './components/Game/game'
import Login from './components/LoginPage'
import GameList from './components/GamePage'
import { BrowserRouter, Route } from "react-router-dom";
import Comment from "./components/Comments"
import Header from "./components/Header"
import {MDBContainer} from "mdbreact"
import Game from "./components/Game/game"


class App extends Component {
  render() {
    return (
      <MDBContainer className="Login">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Login} />
            <Route path="/comments" component={Comment} />
            <Route path="/games" component={GameList} />
            <Route path='/1' component={Game} />

          </div>
        </BrowserRouter>
      </MDBContainer>
    )
  }
}

export default App;
