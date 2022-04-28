// A função saveEvaluation deve salvar as avaliações no localStorage, em uma chave denominada evaluations.
const saveEvaluation = (evaluation) => {
  console.log('evaluation', evaluation);
  localStorage.setItem('evaluations', JSON.stringify(evaluation));
  console.log('evaluations_salvos', localStorage);
};

if (typeof module !== 'undefined') {
  module.exports = saveEvaluation;
}
