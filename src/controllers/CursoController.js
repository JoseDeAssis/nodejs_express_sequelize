/* eslint-disable linebreak-style */
const Controller = require('./Controller.js');
const CursoServices = require('../services/CursoServices.js');
const { Op } = require('sequelize');
const cursoServices = new CursoServices();


class CursoController extends Controller {
  constructor() {
    super(cursoServices);
  }

  async getCursos(req, res) {
    const { data_inicial, data_final } = req.query;
    const where = {};

    // se existirem params, cria um prop {}
    data_inicial || data_final ? where.data_inicio = {} : null;

    // se existir data inicial, adiciona a prop gte com o valor
    data_inicial ? where.data_inicio[Op.gte] = data_inicial : null;
    
    // se existir data final, adiciona a prop lte com o valor
    data_final ? where.data_inicio[Op.lte] = data_final : null;

    try {
      const cursos = await cursoServices.getAllRegisters(where);
      return res.status(200).json(cursos);
    } catch(error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = CursoController;