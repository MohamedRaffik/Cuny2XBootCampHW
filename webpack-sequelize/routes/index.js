const Router = require('express').Router();
const Student =  require('./Student');
const Campus = require('./Campus');

Router.use('/student', Student);
Router.use('/campus', Campus);

module.exports = Router;