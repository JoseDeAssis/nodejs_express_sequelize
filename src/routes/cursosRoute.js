/* eslint-disable linebreak-style */
const { Router } = require('express');
const CursoController = require('../controllers/CursoController.js');

const cursosController= new CursoController();

const router = Router();

router.get('/cursos', (req, res) => cursosController.getCursos(req, res))
  .get('/cursos/:id', (req, res) => cursosController.getById(req, res))
  .post('/cursos', (req, res) => cursosController.create(req, res))
  .put('/cursos/:id', (req, res) => cursosController.update(req, res))
  .delete('/cursos/:id', (req, res) => cursosController.delete(req, res));

module.exports = router;