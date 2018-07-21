const db = require("../models");

module.exports = {
  
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },

  findOne: function(req, res) {
    console.log(req.params)
    console.log('><><><><><><><><><><><')
    return db.User
    .find({username: req.params.id})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.json({
      err: JSON.stringify(err)
    }))
  },

  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
};