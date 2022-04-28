import React, { Component } from 'react';
import saveEvaluation from '../helpers/saveEvaluation';
// import PropTypes from 'prop-types';

export default class CardsProducts extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      evaluation: '',
      mensagem: '',
    };
  }

  onInputChange = ({ target }) => {
    console.log('Entrou em InputChange');
    console.log('target', target);
    this.setState({
      [target.name]: target.value,
    });
  }

  onClickStar = (param) => {
    console.log(param);
    this.setState({
      evaluation: param,
    });
  }

  onClickEnter = (event) => {
    event.preventDefault();
    const { email, evaluation, mensagem } = this.state;
    const evaluationObj = {
      email,
      evaluation,
      mensagem,
    };
    console.log('Entrou em onClickEnter');
    console.log(email, evaluation, mensagem);
    saveEvaluation(evaluationObj);
    this.setState({
      email: '',
      evaluation: '',
      mensagem: '',
    });
  }

  render() {
    // Código do Samuel
    const TRES = 3;
    const QUATRO = 4;
    const CINCO = 5;
    const xablau = [1, 2, TRES, QUATRO, CINCO];
    const { email, evaluation, mensagem } = this.state;
    // console.log(xlablau);
    // const arrayX = [];
    // for (let index = 1; index === CINCO; index += 1) {
    //   arrayX.push(index);
    // }
    return (
      <section>
        <h3>Avaliações</h3>
        <form>
          <input
            data-testid="product-detail-email"
            type="email"
            placeholder="Email"
            name="email"
            value={ email }
            onChange={ this.onInputChange }
            required
          />
          <div className="evaluationStar">
            {xablau.map((elemento, index) => (
              <button
                data-testid={ `${index}-rating` }
                type="button"
                name="evaluation"
                value={ elemento }
                key={ index }
                className={ index <= evaluation ? 'on' : 'off' }
                onClick={ () => this.onClickStar(elemento) }
                required
              >
                <span className="star">&#9733;</span>
              </button>
            ))}
          </div>
          <input
            data-testid="product-detail-evaluation"
            type="text"
            placeholder="Mensagem (Opcional)"
            name="mensagem"
            value={ mensagem }
            onChange={ this.onInputChange }
          />
          <button
            type="submit"
            data-testid="submit-review-btn"
            // Habilitado ou desabilitado conforme as condições de verificação
            // disabled={ isSaveButtonDisabled }
            onClick={ this.onClickEnter }
          >
            Avaliar
          </button>
        </form>
      </section>

    );
  }
}
