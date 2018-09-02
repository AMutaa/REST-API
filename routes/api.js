const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja')

//get a list of ninja from the database
router.get('/ninjas', function (req, res) {
  res.send({ type: 'GET' })
})

//add a new ninja to the database
router.post('/ninjas', function (req, res, next) {
  Ninja.create(req.body).then(function (ninja) {
    res.send(ninja)
  }).catch(next);
})

//update a ninja in the database
router.put('/ninjas/:id', function (req, res, next) {
  Ninja.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
    Ninja.findOne({ _id: req.params.id }).then(function (ninja) {
      res.send(ninja)
    })

  })
})

//delete a ninja from the database
router.delete('/ninjas/:id', function (req, res, next) {
  Ninja.findByIdAndRemove({ _id: req.params.id }).then(function (ninja) {
    res.send(ninja)
  });
  res.send({ type: 'DELETE' })
})

module.exports = router;