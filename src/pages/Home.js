import React from 'react';
import { getCategories } from '../services/api';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      produtosLista: [],
    };
  }

  // No DidMount chama faz a requisição das cartegorias na API
  async componentDidMount() {
    console.log('entrou');
    const resposta = await getCategories();
    console.log('resposta', resposta);
    this.setState({
      produtosLista: resposta,
    });
  }

  OnClickChange = () => {
    console.log('XablAu');
  }

  render() {
    const { produtosLista } = this.state;
    return (
      <section>
        <form>
          <label data-testid="home-initial-message" htmlFor="input-search">
            Digite algum termo de pesquisa ou escolha uma categoria.
            <input id="input-search" type="text" />
          </label>
        </form>
        <div>
          {produtosLista.map((produto) => (
            <section key={ produto.id }>
              <label
                data-testid="category"
                htmlFor="produtos"
              >
                <input
                  type="radio"
                  id="produtos"
                  name="produtos"
                  onClick={ this.OnClickChange }
                />
                { produto.name }
              </label>
            </section>
          ))}
        </div>
      </section>
    );
  }
}
