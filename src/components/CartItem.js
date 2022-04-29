import React from 'react';
import PropTypes from 'prop-types';

export default class CartItem extends React.Component {
  render() {
    const {
      id, title, price, thumbnail, quantity,
      changeQuantity, removeAll,
    } = this.props;

    const multipliedPrice = price * quantity;
    return (
      <div>
        <button onClick={ () => removeAll(id) } type="button">X</button>
        <img src={ thumbnail } alt="" />
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <button
          onClick={ () => changeQuantity(id, false) }
          type="button"
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
        <button
          onClick={ () => changeQuantity(id, true) }
          type="button"
          data-testid="product-increase-quantity"
        >
          +
        </button>
        <p>{ `R$ ${multipliedPrice}` }</p>
      </div>
    );
  }
}

CartItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  quantity: PropTypes.number,
  changeQuantity: PropTypes.func,
  removeAll: PropTypes.func,
}.isRequired;
