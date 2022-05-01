import React, { Component } from 'react';
import PropTypes from 'prop-types';
import saveEvaluation from '../helpers/saveEvaluation';
import getEvaluations from '../helpers/getEvaluations';
import { getProductDetails } from '../services/api';

export default class ReviewForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      rating: '',
      mensagem: '',
      hasEvaluation: false,
      evaluations: [],
    };
  }

  componentDidMount() {
    // console.log('evaluations_salvos', localStorage);
    // const { id } = this.props;
    // console.log('id', id);
    const hasEvaluation = getEvaluations() !== null;
    // console.log('Entrou no else');
    // console.log(getEvaluations());
    this.setState({
      hasEvaluation,
      evaluations: hasEvaluation ? getEvaluations() : [],
    });
  }

  onInputChange = ({ target }) => {
    // console.log('Entrou em InputChange');
    // console.log('target', target);
    this.setState({
      [target.name]: target.value,
      // id,
    });
  }

  onClickStar = (param) => {
    // console.log(param);
    this.setState({
      rating: param,
    });
  }

  onClickEvaluate = async (event) => {
    event.preventDefault();
    const { email, rating, mensagem } = this.state;
    const { id } = this.props;
    await getProductDetails(id);
    const evaluationObj = {
      email,
      rating,
      mensagem,
      id,
    };
    // console.log('Entrou em onClickEnter');
    // console.log(email, rating, mensagem);
    saveEvaluation(evaluationObj);
    const hasEvaluation = getEvaluations() !== null;
    this.setState({
      email: '',
      rating: '',
      mensagem: '',
      hasEvaluation,
      evaluations: getEvaluations() === null ? [] : getEvaluations(),
    });
  }

  render() {
    // Código do Samuel
    const { hasEvaluation, evaluations, email, rating, mensagem } = this.state;
    // console.log('evaluations', evaluations);
    const CINCO = 5;
    const reviewStars = [];
    for (let i = 1; i <= CINCO; i += 1) {
      reviewStars.push(i);
    }
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
          <div className="ratingStar">
            {reviewStars.map((elemento, index) => (
              <button
                data-testid={ `${index + 1}-rating` }
                type="button"
                name="rating"
                value={ elemento }
                key={ index }
                className={ index <= rating ? 'on' : 'off' }
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
            onClick={ this.onClickEvaluate }
          >
            Avaliar
          </button>
        </form>
        {
          hasEvaluation
            && (
              <section>
                { evaluations.map((elemento, index) => (
                  (elemento.id === id)
                      && (
                        <div key={ `${elemento.id}review${index}` }>
                          <span>
                            <p>{ elemento.email }</p>
                            <p>{ elemento.rating }</p>
                          </span>
                          <p>
                            { elemento.mensagem }
                          </p>
                        </div>
                      )
                )) }
              </section>
            )
        }
      </section>
    );
  }
}

ReviewForm.propTypes = {
  id: PropTypes.string,
}.isRequired;
