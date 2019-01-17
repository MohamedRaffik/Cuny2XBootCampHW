const Router = require('express').Router();
const { Student } = require('../models');

Router.get('/', (req, res) => {
  Student.findAll().then(rows => res.send(rows));
});

module.exports = Router;

