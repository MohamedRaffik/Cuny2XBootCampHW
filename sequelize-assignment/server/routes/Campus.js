const Router = require('express').Router();
const { Campus } = require('../models');

Router.get('/', (req, res) => {
  Campus.findAll().then(rows => res.send(rows));
});

module.exports = Router;
