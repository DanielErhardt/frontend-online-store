import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class CardsProducts extends React.Component {
  render() {
    // Código do Matheus
    const { title, thumbnail, price, product } = this.props;
    return (
      <div data-testid="product">
        <h2>{ title }</h2>
        <p>
          { price }
          {' '}
        </p>
        <img src={ thumbnail } alt="" />
        <Link
          data-testid="product-detail-link"
          to={ `/products/${product.id}` }
        >
          Mais Detalhes

        </Link>
      </div>
    );
  }
}

CardsProducts.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.string,
}.isRequired;
