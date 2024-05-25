/* eslint-disable linebreak-style */
const Controller = require('./Controller.js');
const CategoriaServices = require('../services/CategoriaServices.js');

class CategoriaController extends Controller {
  constructor() {
    const categoriaServices = new CategoriaServices();
    super(categoriaServices);
  }
}

module.exports = CategoriaController;