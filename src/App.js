import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import MoreDetails from './pages/MoreDetails';
import Checkout from './pages/Checkout';
import getProducts from './helpers/getProducts';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 0,
    };
  }

  componentDidMount() {
    this.quantityUpdate();
  }

  quantityUpdate = () => {
    let quantity = 0;
    const cartItems = getProducts() || [];
    quantity = cartItems.length;

    this.setState({
      quantity,
    });
  }

  render() {
    const { quantity } = this.state;
    // console.log(quantity);
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => (
              // Repassa as props recebidas do App para o componente da page Home
              // Junto passa as props do Router para poder fazer uso do History, por exemplo
              <Home
                { ...props }
                quantity={ quantity }
                quantityUpdate={ this.quantityUpdate }
              />
            ) }
          />
          <Route
            path="/cart"
            render={ (props) => (
              <Cart
                { ...props }
                quantityUpdate={ this.quantityUpdate }
              />
            ) }
          />
          <Route
            path="/products/:id"
            render={ (props) => (
              <MoreDetails
                { ...props }
                quantity={ quantity }
                quantityUpdate={ this.quantityUpdate }
              />
            ) }
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
