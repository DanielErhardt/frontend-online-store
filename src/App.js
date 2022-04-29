import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { getProductDetails } from './services/api';
import MoreDetails from './pages/MoreDetails';
import saveProduct from './helpers/saveProduct';

export default class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     cartItems: [],
  //   };
  // }

  addToCart = async (id) => { // chamar essa funçao nos botoes de adcionar ao carrinho
    // const { cartItems } = this.state;
    const product = await getProductDetails(id);
    saveProduct(product);
    // this.setState({
    //   cartItems: [...cartItems, product],
    // });
  }

  // updateCartItems = (newCartItems) => {
  //   this.setState({
  //     cartItems: newCartItems,
  //   });
  // }

  updateCartItems = async (itemId) => {
    const product = await getProductDetails(itemId);
    saveProduct(product);
  }

  render() {
    // const { cartItems } = this.state;
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
                // cartItems={ cartItems }
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
