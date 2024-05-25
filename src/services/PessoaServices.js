/* eslint-disable linebreak-style */
const Services = require('./Services.js');

class PessoasServices extends Services { 
  constructor() {
    super('Pessoa');
  }

  async getMatriculasByEstudante(estudanteId) {
    const estudante = await super.getRegisterById(estudanteId);
    const matriculas = await estudante.getAulasMatriculadas();

    return matriculas;
  }
}

module.exports = PessoasServices;