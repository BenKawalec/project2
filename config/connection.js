// importing sequelize
const Sequelize = require('sequelize');

// require dotenv to give access to variables
require('dotenv').config();

// setting up sequelize object using sequelize instructor imported from the sequelize node module
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    },
  );
}

//exporting our newly created sequelize object
module.exports = sequelize;