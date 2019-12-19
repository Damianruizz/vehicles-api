'user strict';

var dbConnection = require('../db.js');

exports.getAllUsers = callback => {
  dbConnection.query('select * from user', callback);
}