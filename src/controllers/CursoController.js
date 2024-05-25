/* eslint-disable linebreak-style */
const Controller = require('./Controller.js');
const CursoServices = require('../services/CursoServices.js');

class CursoController extends Controller {
  constructor() {
    const cursoServices = new CursoServices();
    super(cursoServices);
  }
}

module.exports = CursoController;