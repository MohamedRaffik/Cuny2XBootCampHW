
module.exports = (db, Sequelize) => {
  return db.define('campus', {
    name: { 
      type: Sequelize.STRING, 
      validate: { isNull: false }
    },
    imageUrl: { type:Sequelize.TEXT, defaultValue: "" },
    address: { type: Sequelize.TEXT, allowNull: false },
    description: { type: Sequelize.TEXT, }
  });
}