// importing sequelize
const Sequelize = require('sequelize');

// require dotenv to give access to variables
require('dotenv').config();

// setting up sequelize object using sequelize instructor imported from the sequelize node module
module.exports = {
    HOST: "us-cdbr-east-06.cleardb.net",
    USER: "bc5ad3e98ffdb4",
    PASSWORD: "270d519a",
    DB: "heroku_2216c2050836347"
  };

