import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import * as api from './services/api';
import Home from './pages/Home';
import Cart from './pages/Cart';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/cart" component={ Cart } />
        </Switch>
      </BrowserRouter>
    );
  }
}
