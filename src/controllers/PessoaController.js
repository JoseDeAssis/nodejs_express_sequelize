/* eslint-disable linebreak-style */
const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoasServices = new PessoaServices();

class PessoaController extends Controller {
  
  constructor() {
    super(pessoasServices);
  }

  async getMatriculasAtivas(req, res) {
    const { estudante_id } = req.params;

    try {
      const matriculas = await pessoasServices.getMatriculasAtivasByEstudante(Number(estudante_id));

      return res.status(200).json(matriculas);
    } catch(error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getAllMatriculas(req, res) {
    const { estudante_id } = req.params;

    try {
      const matriculas = await pessoasServices.getAllMatriculas(Number(estudante_id));

      return res.status(200).json(matriculas);
    } catch(error) {
      return res.status(500).json({ error: error.message} );
    }
  }

  async getTodasAsPessoas(req, res) {
    try {
      const pessoas = await pessoasServices.getPessoasEscopoTodas();

      return res.status(200).json(pessoas);
    } catch(error) {
      return res.status(500).json({ message: 'erro no servidor' });
    }
  }
}

module.exports = PessoaController;