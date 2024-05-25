/* eslint-disable linebreak-style */
const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoasServices = new PessoaServices();

class PessoaController extends Controller {
  
  constructor() {
    super(pessoasServices);
  }

  async getMatriculas(req, res) {
    const { estudanteId } = req.params;

    try {
      const matriculas = await pessoasServices.getMatriculasByEstudante(Number(estudanteId));

      return res.status(200).json(matriculas);
    } catch(error) {
      return res.status(500).json({ message: 'erro no servidor' });
    }
  }
}

module.exports = PessoaController;