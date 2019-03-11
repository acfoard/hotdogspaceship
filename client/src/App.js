import React, { Component } from 'react';
import './App.css';
import Login from './components/LoginPage'
import {BrowserRouter, Route} from "react-router-dom";
import Comment from "./components/Comments"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/comments" component={Comment}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
