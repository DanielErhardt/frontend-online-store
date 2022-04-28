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
      itemsCart: [],
    };
  }

  addToCart = async (id) => { // chamar essa funçao nos botoes de adcionar ao carrinho
    const { itemsCart } = this.state;
    const product = await getProductDetails(id);
    this.setState({
      itemsCart: [...itemsCart, product],
    });
  }

  render() {
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
          <Route path="/cart" component={ Cart } />
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
