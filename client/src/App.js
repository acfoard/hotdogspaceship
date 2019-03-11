import React, { Component } from 'react';
import './App.css';
import Login from './components/LoginPage'
import {BrowserRouter, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Login} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
