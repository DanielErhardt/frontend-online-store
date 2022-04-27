import React from 'react';
import CartButton from '../components/CartButton';

export default class Home extends React.Component {
  render() {
    return (
      <section>
        <form>
          <label data-testid="home-initial-message" htmlFor="input-search">
            Digite algum termo de pesquisa ou escolha uma categoria.
            <input id="input-search" type="text" />
          </label>
        </form>
        <CartButton />
      </section>
    );
  }
}
