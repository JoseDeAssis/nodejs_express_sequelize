/* eslint-disable linebreak-style */
const Sequelize = require('sequelize');
const Controller = require('./Controller.js');
const MatriculaServices = require('../services/MatriculaServices.js');
const matriculaService = new MatriculaServices();

class MatriculaController extends Controller {
  constructor() {
    super(matriculaService);
  }

  async getMatriculasPorEstudante(req, res) {
    const { estudante_id } = req.params;

    try {
      const listaMatriculasPorEstudante = await matriculaService.getNumberOfRegisters({
        where: {
          estudante_id: Number(estudante_id),
          status: 'matriculado'
        },
        limit: 2,
        order: [['id', 'ASC']]
      });

      res.status(200).json(listaMatriculasPorEstudante);
    } catch(error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getCursosLotados(req, res) {
    const lotacaoCursos = 1;
    try {
      const cursosLotados = await matriculaService.getNumberOfRegisters({
        where: {
          status: 'matriculado'
        },
        attributes: ['curso_id'],
        group: ['curso_id'],
        having: Sequelize.literal(`count(curso_id) >= ${lotacaoCursos}`)
      });

      return res.status(200).json(cursosLotados);
    } catch(error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = MatriculaController;