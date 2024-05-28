/* eslint-disable linebreak-style */
const Services = require('./Services.js');

class PessoasServices extends Services { 
  constructor() {
    super('Pessoa');
  }

  async getMatriculasAtivasByEstudante(estudanteId) {
    const estudante = await super.getRegisterById(estudanteId);
    const matriculas = await estudante.getAulasMatriculadas();

    return matriculas;
  }

  async getAllMatriculas(estudanteId) {
    const estudante = await super.getRegisterById(estudanteId);
    const matriculas = await estudante.getAllMatriculas();

    return matriculas;
  }

  async getPessoasEscopoTodas() {
    const pessoas = await super.getRegistersByScope('todosOsRegistros');
    
    return pessoas;
  }
}

module.exports = PessoasServices;