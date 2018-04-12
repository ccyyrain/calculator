import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <nav className="navbar is-info">
      <div id="navMenuTransparentExample" className="navbar-menu">
      <div className="navbar-menu">
      <div className="navbar-start">
      <a className="navbar-item title" href="/">Hello Movie!</a>
      </div>
      <div className="navbar-end">
      <a className="navbar-item " href="/">
      <i className="fa fa-home fa-2x"></i>
      Home
      </a>
      </div>
      </div>
      </div>
      </nav>
      <h className="App-intro">
      Calculator
      </h>
      </div>
    );
  }
}

export default App;
