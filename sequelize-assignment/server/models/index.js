const Sequelize = require('sequelize');
const db = new Sequelize('postgres://postgres@localhost/campuses');
const StudentModel = require('./Campus');
const CampuseModel = require('./Student'); 

const Student = StudentModel(db, Sequelize);
const Campus = CampuseModel(db, Sequelize);

Student.belongsTo(Campus);
Campus.hasMany(Student);

db.sync().then(() => console.log('Tables Synced')).catch(err => console.error(err));

module.exports = {
  Student,
  Campus
};