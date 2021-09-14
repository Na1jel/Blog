import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Categories from './categories';
import Posts from './posts';
import IDpost from './IDpost'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Categories />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route >
        <Route path='/categories/:id'> 
          <IDpost/>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

