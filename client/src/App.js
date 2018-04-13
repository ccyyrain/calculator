import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import calculator from './calculator';
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">

      <nav className="navbar is-info">
      <div id="navMenuTransparentExample" className="navbar-menu">
      <div className="navbar-menu">
      <div className="navbar-start">
      <a className="navbar-item title" href="/">A Simple Calculator</a>
      </div>
      <div className="navbar-end">
      <a className="navbar-item " href="/">
      <i className="fa fa-home fa-2x"></i>
      Login
      </a>
      </div>
      </div>
      </div>
      </nav>

      <h className="App-intro">
      Please Login to use the calculator.
      </h>
        <div className="content">
          <Route path="/" component={calculator} />
        </div>
      </div>
    );
  }
}

export default App;
