/* eslint-disable linebreak-style */
const dataSource = require('../database/models');

class Services {
  constructor(modelName) {
    this.model = modelName;
  }

  async getAllRegisters() {
    return dataSource[this.model].findAll();
  }

  async getRegisterById(id) {
    return dataSource[this.model].findByPk(id);
  }

  async createRegister(register) {
    return dataSource[this.model].create(register);
  }

  async updateRegister(dataToUpdate, id) {
    const updatedRegisters = await dataSource[this.model].update(dataToUpdate, {
      where: { id: id } // poderia ser where: { id } porque o campo a ser atualizado e o valor passado tem o mesmo nome
    });

    if(updatedRegisters[0] === 0) return false;
    return true;
  }

  async deleteRegister(id) {
    return await dataSource[this.model].destroy({ where: { id: id } });
  }

}

module.exports = Services;