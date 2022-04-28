import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { getProductDetails } from './services/api';
import MoreDetails from './pages/MoreDetails';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cartItems: [],
    };
  }

  addToCart = async (id) => { // chamar essa funçao nos botoes de adcionar ao carrinho
    const { cartItems } = this.state;
    const product = await getProductDetails(id);
    this.setState({
      cartItems: [...cartItems, product],
    }, () => console.log('add', this.state.cartItems));
  }

  updateCartItems = (newCartItems) => {
    this.setState({
      cartItems: newCartItems,
    }, () => console.log('update', this.state.cartItems));
  }

  render() {
    const { cartItems } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => (
              <Home
                { ...props }
                addToCart={ this.addToCart }
              />
            ) }
          />
          <Route
            path="/cart"
            render={ (props) => (
              <Cart
                { ...props }
                cartItems={ cartItems }
                updateCartItems={ this.updateCartItems }
              />
            ) }
          />
          <Route
            path="/products/:id"
            render={ (props) => (
              <MoreDetails
                { ...props }
                addToCart={ this.addToCart }
              />
            ) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
