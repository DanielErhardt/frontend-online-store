// A função getEvaluation é responsável por recuperar as avaliações salvas no local.Storage
const getEvaluations = () => JSON.parse(localStorage.getItem('evaluations'));

if (typeof module !== 'undefined') {
  module.exports = getEvaluations;
}
