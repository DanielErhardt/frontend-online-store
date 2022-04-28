import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class CardsProducts extends React.Component {
  constructor() {
    super();

    this.state = {
      listaProducts: [],
    };
  }

  getList = () => {
    const { products } = this.props;
    this.setState({
      listaProducts: products,
    });
  }

  render() {
    // Código do Matheus
    const { title, thumbnail, price, products } = this.props;
    const { listaProducts } = this.state;
    return (
      <div data-testid="product">
        <h2>{ title }</h2>
        <p>
          { price }
          {' '}
        </p>
        <img src={ thumbnail } alt="" />
        <Link to={ `/products/${products.id}` }>Mais Detalhes</Link>
      </div>
    );
  }
}

CardsProducts.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.string,
}.isRequired;
