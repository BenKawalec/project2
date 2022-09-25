// importing sequelize
const Sequelize = require('sequelize');

// require dotenv to give access to variables
require('dotenv').config();

// setting up sequelize object using sequelize instructor imported from the sequelize node module
const sequelize = new Sequelize(

    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
);
// let cleardb = {
//     HOST: "us-cdbr-east-06.cleardb.net",
//     USER: "bc5ad3e98ffdb4",
//     PASSWORD: "270d519a",
//     DB: "heroku_2216c2050836347"
//   };

//exporting our newly created sequelize object
module.exports = sequelize;