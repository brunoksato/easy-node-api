var ProfessorModel = require('../model/ProfessorModel');
var AlunoModel = require('../model/AlunoModel');

function UserController() {}

UserController.prototype.login = function(req, res) {

  var email = req.params.email;
  var senha = req.params.senha;

  AlunoModel.findAll({
    where: {
      email: email,
      senha: senha
    }
  }).then(function(result){

    if(result.length === 0){

      ProfessorModel.findAll({
        where: {
          email: email,
          senha: senha
        }
      }).then(function(result1){
        res.json(result1 || []);
      });

    }
    else{
      res.json(result || []);
    }

  }).catch(function(err) {

    console.log(err);

  });
};

module.exports = new UserController();
