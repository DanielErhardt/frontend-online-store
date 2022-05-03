import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import MoreDetails from './pages/MoreDetails';
import Checkout from './pages/Checkout';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={ Home }
          />
          <Route
            path="/cart"
            component={ Cart }
          />
          <Route
            path="/products/:id"
            component={ MoreDetails }
          />
          <Route
            path="/checkout"
            component={ Checkout }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
