/* eslint-disable linebreak-style */
class Controller {
  constructor(serviceEntity) {
    this.serviceEntity = serviceEntity;
  }

  async getAll(req, res) {
    try {
      const registersList = await this.serviceEntity.getAllRegisters();

      return res.status(200).json(registersList);
    } catch(error) {
      return res.status(500).json({ message: 'erro no servidor' });
    }
  }

  async getById(req, res) {
    const { id } = req.params;

    try {
      const register = await this.serviceEntity.getRegisterById(Number(id));

      return res.status(200).json(register);
    } catch(error) {
      return res.status(500).json({ message: 'erro no servidor' });
    }
  }

  async create(req, res) {
    const newRegister = req.body;

    try {
      const createdRegister = await this.serviceEntity.createRegister(newRegister);
      
      return res.status(200).json(createdRegister);
    } catch(error) {
      return res.status(500).json({ message: 'erro no servidor' });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const updatedData = req.body;
    
    try {
      const isUpdated = await this.serviceEntity.updateRegister(updatedData, Number(id));
      
      if(!isUpdated) {
        return res.status(400).json({ message: 'Registro não foi atualizado' }); 
      }
      return res.status(200).json({ message: 'Registro atualizado com sucesso!' });
    } catch(error) {
      return res.status(500).json({ message: 'erro no servidor' });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    console.log(id);
    
    try {
      await this.serviceEntity.deleteRegister(Number(id));
      return res.status(200).json({ message: `Id ${id} deletado!`});
    } catch(error) {
      return res.status(500).json({ message: 'erro no servidor' });
    }
  }
}

module.exports = Controller;