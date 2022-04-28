import React, { Component } from 'react';
import saveEvaluation from '../helpers/saveEvaluation';
// import PropTypes from 'prop-types';

export default class CardsProducts extends Component {
  constructor() {
    super();
    this.state = {
    //   evaluations: [],
      email: '',
      evaluation: '',
      mensagem: '',
    };
  }

  onInputChange = ({ target }) => {
    console.log('Entrou em InputChange');
    console.log('value', target.value);
    this.setState({
      [target.name]: target.value,
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
    // const {  } = this.props;
    const TRES = 3;
    const QUATRO = 4;
    const CINCO = 5;
    const xablau = [1, 2, TRES, QUATRO, CINCO];
    const { email, evaluation, mensagem } = this.state;
    // console.log(xlablau);
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
            {xablau.map((elemento, index) => {
              // console.log(index, elemento);
              console.log(xablau.length);
              index += 1;
              return (
                <button
                  data-testid={ `${index}-rating` }
                  type="button"
                  name="evaluation"
                  value={ elemento }
                  key={ index }
                  className={ index <= evaluation ? 'on' : 'off' }
                  onClick={ this.onInputChange }
                  required
                >
                  <span className="star">&#9733;</span>
                </button>
              );
            })}
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

// CardsProducts.propTypes = {
//   title: PropTypes.string,
//   thumbnail: PropTypes.string,
//   price: PropTypes.string,
// }.isRequired;
