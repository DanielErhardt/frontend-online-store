// A função saveEvaluation deve salvar as avaliações no localStorage, em uma chave denominada evaluations.
const getEvaluations = require('./getEvaluations');

const saveEvaluation = (evaluationObj) => {
  // console.log('evaluationObj', evaluationObj);
  if (getEvaluations() === null) {
    // console.log('Entrou na condição null');
    localStorage.setItem('evaluations', JSON.stringify([evaluationObj]));
  } else {
    // console.log('Entrou no else');
    // console.log(getEvaluations());
    localStorage.setItem(
      'evaluations',
      // O JSON.parse transforma a string em JSON novamente, o inverso do JSON.strigify
      JSON.stringify([
        ...getEvaluations(),
        evaluationObj,
      ]),
    );
  }
  // console.log('evaluations_salvos', localStorage);
};

if (typeof module !== 'undefined') {
  module.exports = saveEvaluation;
}
