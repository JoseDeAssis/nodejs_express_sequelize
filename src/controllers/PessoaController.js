/* eslint-disable linebreak-style */
const Controller = require('./Controller.js');
const PessoasServices = require('../services/PessoasServices.js');


class PessoaController extends Controller {
  
  constructor() {
    const pessoasServices = new PessoasServices();
    super(pessoasServices);
  }
}

module.exports = PessoaController;