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
      <span>
        <button onClick={ removeAll(id) } type="button">X</button>
        <img src={ thumbnail } alt="" />
        <p>{ title }</p>
        <button onClick={ changeQuantity(id, false) } type="button">-</button>
        <p>{ quantity }</p>
        <button onClick={ changeQuantity(id, true) } type="button">+</button>
        <p>{ `R$ ${multipliedPrice}` }</p>
      </span>
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
