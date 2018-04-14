import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Calculator from './Calculator';
import { Route } from 'react-router-dom';
import { withAuth } from './Auth';
import Account from './Account';

class App extends Component {

  render() {
    console.log(this.props,"props");
    return (
      <div className="App">

      <nav className="navbar is-info">
      <div id="navMenuTransparentExample" className="navbar-menu">
      <div className="navbar-menu">
      <div className="navbar-start">
      <a className="navbar-item title" href="/">A Simple Calculator</a>
      </div>
      <div className="navbar-end">
      <Account {...this.props} />
      </div>
      </div>
      </div>
      </nav>

      <h className="App-intro">
      Introduction~
      </h>
        <div className="content">
          <Route path="/" render={props => <Calculator {...props} {...this.props} />} />
        </div>
      </div>
    );
  }
}

export default withAuth(App);
