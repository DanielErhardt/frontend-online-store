import React from 'react';
import { Link } from 'react-router-dom';
import cartLogo from '../Images/cartLogo.png';
import './CartButton.css';

export default class CartButton extends React.Component {
  render() {
    return (
      <Link to="/cart" data-testid="shopping-cart-button">
        {/* <h3>Ir para o Carrinho</h3> */}
        <img className="cartLogo" src={ cartLogo } alt="Carrinho" />
      </Link>
    );
  }
}
