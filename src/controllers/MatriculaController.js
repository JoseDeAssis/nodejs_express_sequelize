/* eslint-disable linebreak-style */
const Controller = require('./Controller.js');
const MatriculaServices = require('../services/MatriculaServices.js');

class MatriculaController extends Controller {
  constructor() {
    const matriculaService = new MatriculaServices();
    super(matriculaService);
  }
}

module.exports = MatriculaController;