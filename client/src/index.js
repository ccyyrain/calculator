import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route,BrowserRouter, Switch } from 'react-router-dom';

import Root from './Root';
import movie_details from './movies';

ReactDOM.render(
  <div>
    <App />
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Root}/>
        <Route path='/movies/:movieId' component={movie_details}/>
      </Switch>
    </BrowserRouter>

  </div>,document.getElementById('root'));
