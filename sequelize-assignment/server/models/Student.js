
module.exports = (db, Sequelize) => {
  return db.define('student', {
    firstName: { type: Sequelize.STRING, allowNull: false },
    lastName: { type: Sequelize.STRING, allowNull: false },
    email: { 
      type: Sequelize.TEXT, 
      validate: { isEmail: true },
    },
    imageUrl: {type: Sequelize.TEXT, defaultValue: "" },
    gpa: { 
      type: Sequelize.FLOAT,
      validate: { max: 4.0, min: 0.0 }
    }
  });
}