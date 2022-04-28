import React from 'react';
import PropTypes from 'prop-types';
import AddToCart from './AddToCart';

export default class CardsProducts extends React.Component {
  render() {
    // Código do Matheus
    const { title, thumbnail, price, id, addToCart } = this.props;
    return (
      <div data-testid="product">
        <h2>{ title }</h2>
        <p>
          { price }
          {' '}
        </p>
        <img src={ thumbnail } alt="" />
        <AddToCart addToCart={ addToCart } id={ id } />
      </div>
    );
  }
}

CardsProducts.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.string,
  addToCart: PropTypes.func,
}.isRequired;
