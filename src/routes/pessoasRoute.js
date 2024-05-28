/* eslint-disable linebreak-style */
const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');
const MatriculaController = require('../controllers/MatriculaController.js');

const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

const router = Router();

router.get('/pessoas', (req, res) => pessoaController.getAll(req, res))
  .get('/pessoas/todas', (req, res) => pessoaController.getTodasAsPessoas(req, res))
  .get('/pessoas/:id', (req, res) => pessoaController.getById(req, res))
  .post('/pessoas', (req, res) => pessoaController.create(req, res))
  .put('/pessoas/:id', (req, res) => pessoaController.update(req, res))
  .delete('/pessoas/:id', (req, res) => pessoaController.delete(req, res))
  .get('/pessoas/:estudante_id/matriculas', (req, res) => pessoaController.getMatriculasAtivas(req, res))
  .get('/pessoas/:estudante_id/matriculas/all', (req, res) => pessoaController.getAllMatriculas(req, res))
  .get('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.getRegister(req, res))
  .post('/pessoas/:estudante_id/matriculas', (req, res) => matriculaController.create(req, res))
  .put('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.update(req, res))
  .delete('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.delete(req, res));

module.exports = router;