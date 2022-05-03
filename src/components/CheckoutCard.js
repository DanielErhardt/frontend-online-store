import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CheckoutCard extends Component {
  render() {
    const {
      title, price, thumbnail, quantity } = this.props;

    const multipliedPrice = price * quantity;
    return (
      <section>
        <div>
          <img src={ thumbnail } alt="" />
          <p>{ title }</p>
          <p>{ `R$ ${multipliedPrice}` }</p>
        </div>
      </section>
    );
  }
}

CheckoutCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  quantity: PropTypes.number,
}.isRequired;
