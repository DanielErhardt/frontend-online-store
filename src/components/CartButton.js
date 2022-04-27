import React from 'react';
import { Link } from 'react-router-dom';

export default class CartButton extends React.Component {
  render() {
    return (
      <Link to="/cart" data-testid="shopping-cart-button">
        Carrinho de Compras
      </Link>
    );
  }
}
