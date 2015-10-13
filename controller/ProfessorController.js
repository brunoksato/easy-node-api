var ProfessorModel = require('../model/ProfessorModel');

function ProfessorController() {}

ProfessorController.prototype.findOne = function(req, res) {

  var _id = req.params._id;

  ProfessorModel.find(_id).then(function(result){

    res.json(result || []);

  }).catch(function(err) {

    console.log(err);

  });
};

ProfessorController.prototype.findAll = function(req, res) {

 ProfessorModel.findAll({}).then(function(result){

    res.json(result || []);

  }).catch(function(err) {

    console.log(err);

  });

};

ProfessorController.prototype.create = function(req, res) {
  var data = req.body;

  ProfessorModel.create(data)
    .then(function(result) {
      res.json(result);
    })
    .catch(function(err) {
      console.log(err)
    });
};

ProfessorController.prototype.update = function(req, res) {
  var data = req.body,
      _id = req.params.id;

  ProfessorModel.update(data, _id)
    .then(function(result) {
      res.json(result);
    })
    .catch(function(err) {
      console.log(err)
    });
};


ProfessorController.prototype.delete = function(req, res) {
  var _id = req.params.id;

  ProfessorModel.delete(_id)
    .then(function(result) {
      res.json(result);
    })
    .catch(function(err) {
      console.log(err)
    });
};

module.exports = new ProfessorController(ProfessorModel);
