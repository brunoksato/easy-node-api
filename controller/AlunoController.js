var AlunoModel = require('../model/AlunoModel');

function AlunoController() {}

AlunoController.prototype.findOne = function(req, res) {
  var _id = req.params._id;

  AlunoModel.find(_id).then(function(result){
    res.json(result || []);
  }).catch(function(err) {
    console.log(err);
  });
};

AlunoController.prototype.findAll = function(req, res) {
  AlunoModel.findAll({}).then(function(result){
    res.json(result || []);
  }).catch(function(err) {
    console.log(err);
  });
};

AlunoController.prototype.create = function(req, res) {
  var data = req.body;

  AlunoModel.create(data)
    .then(function(result) {
      res.json(result);
    })
    .catch(function(err) {
      console.log(err)
    });
};

AlunoController.prototype.update = function(req, res) {
  var data = req.body,
      _id = req.params.id;

  AlunoModel.update(data, _id)
    .then(function(result) {
      res.json(result);
    })
    .catch(function(err) {
      console.log(err)
    });
};


AlunoController.prototype.delete = function(req, res) {
  var _id = req.params.id;

  AlunoModel.delete(_id)
    .then(function(result) {
      res.json(result);
    })
    .catch(function(err) {
      console.log(err)
    });
};

module.exports = new AlunoController(AlunoModel);
