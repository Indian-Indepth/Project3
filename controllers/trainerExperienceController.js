const db = require("../models");


// Defining methods
module.exports = {
  findAll: function(req, res) {
    db.TrainerExperience
      .find(req.query)
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.TrainerExperience
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.TrainerExperience
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.TrainerExperience
      .findOneAndUpdate(
        { _id: req.params.id },
        { $set: { "name" : req.params.name}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateAll: function(req, res) {
    db.TrainerExperience
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.TrainerExperience
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};