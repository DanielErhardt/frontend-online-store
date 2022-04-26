import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <form>
        <label data-testid="home-initial-message" htmlFor="input-search">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input id="input-search" type="text" />
        </label>
      </form>
    );
  }
}
