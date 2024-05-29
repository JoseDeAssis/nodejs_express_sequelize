/* eslint-disable linebreak-style */
const dataSource = require('../database/models');
const Services = require('./Services.js');

class PessoasServices extends Services { 
  constructor() {
    super('Pessoa');
    this.matriculaServices = new Services('Matricula');
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

  async cancelaPessoaEMatricula(estudanteId) {
    return dataSource.sequelize.transaction(async (transacao) => {
      await super.updateRegister({ ativo: false}, { id: estudanteId }, transacao);
      await this.matriculaServices.updateRegister({ status: 'cancelado'}, { estudante_id: estudanteId }, transacao);
    });
  }
}

module.exports = PessoasServices;