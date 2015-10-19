var express = require('express');
var router = express.Router();

/* Rotas Professor */
var ProfessorController = require('../controller/ProfessorController');

router.get('/professor',           ProfessorController.findAll.bind(ProfessorController));
router.get('/professor/:_id',      ProfessorController.findOne.bind(ProfessorController));
router.post('/professor',          ProfessorController.create.bind(ProfessorController));
router.put('/professor/:_id',      ProfessorController.update.bind(ProfessorController));
router.delete('/professor/:_id',   ProfessorController.delete.bind(ProfessorController));

/* Rotas Aluno */
var AlunoController = require('../controller/AlunoController');

router.get('/aluno',           AlunoController.findAll.bind(AlunoController));
router.get('/aluno/:_id',      AlunoController.findOne.bind(AlunoController));
router.post('/aluno',          AlunoController.create.bind(AlunoController));
router.put('/aluno/:_id',      AlunoController.update.bind(AlunoController));
router.delete('/aluno/:_id',   AlunoController.delete.bind(AlunoController));

/* Rotas Prices */
var UserController = require('../controller/UserController');

router.get('/login/:email/:senha', UserController.login.bind(UserController));

// load the single view file (angular will handle the page changes on the front-end)
router.get('*', function(req, res) {
    res.sendFile('./public/index.html');
});

module.exports = router;
