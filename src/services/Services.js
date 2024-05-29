/* eslint-disable linebreak-style */
const dataSource = require('../database/models');

class Services {
  constructor(modelName) {
    this.model = modelName;
  }

  async getAllRegisters(where = {}) {
    return dataSource[this.model].findAll({ where: { ...where } });
  }

  async getRegistersByScope(scope) {
    return dataSource[this.model].scope(scope).findAll();
  }

  async getRegisterById(id) {
    return dataSource[this.model].findByPk(id);
  }

  async getRegister(where) {
    return dataSource[this.model].findOne({ where: { ...where } });
  }

  async getNumberOfRegisters(options) {
    return dataSource[this.model].findAndCountAll({ ...options });
  }

  async createRegister(register) {
    return dataSource[this.model].create(register);
  }

  async updateRegister(dataToUpdate, where) {
    const updatedRegisters = await dataSource[this.model].update(dataToUpdate, {
      where: { ...where } // poderia ser where: { id } porque o campo a ser atualizado e o valor passado tem o mesmo nome
    });

    if(updatedRegisters[0] === 0) return false;
    return true;
  }

  async deleteRegister(id) {
    return await dataSource[this.model].destroy({ where: { id: id } });
  }

}

module.exports = Services;