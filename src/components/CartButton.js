import React from 'react';
import { Link } from 'react-router-dom';
import cartLogo from '../images/cartLogo.png';
import getProducts from '../helpers/getProducts';
import './CartButton.css';

export default class CartButton extends React.Component {
  render() {
    let quantity = 0;
    let index = 0;
    const cartItems = getProducts() || [];
    while (index < cartItems.length) {
      quantity += 1;
      index += 1;
    }
    return (
      <Link to="/cart" data-testid="shopping-cart-button">
        {/* <h3>Ir para o Carrinho</h3> */}
        <span className="cartLogoMain">
          <img className="cartLogo" src={ cartLogo } alt="Carrinho" />
          <div data-testid="shopping-cart-size">
            <p>{ quantity }</p>
          </div>
        </span>
        {/* <img className="cartLogo" src={ cartLogo } alt="Carrinho" />
        <div data-testid="shopping-cart-size">
          <p>{ quantity }</p>
        </div> */}
      </Link>
    );
  }
}
