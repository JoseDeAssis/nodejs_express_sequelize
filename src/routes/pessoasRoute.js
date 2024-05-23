/* eslint-disable linebreak-style */
const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const pessoaController = new PessoaController();

const router = Router();

router.get('/pessoas', (req, res) => pessoaController.getAll(req, res))
  .get('/pessoas/:id', (req, res) => pessoaController.getById(req, res))
  .post('/pessoas', (req, res) => pessoaController.create(req, res))
  .put('/pessoas/:id', (req, res) => pessoaController.update(req, res))
  .delete('/pessoas/:id', (req, res) => pessoaController.delete(req, res));

module.exports = router;