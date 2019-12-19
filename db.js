'use-strict';

const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'DamianelreyD123456',
  database: 'selling_my_house',
  debug: false 
});
 
const executeQuery = (sql, callback) => {
  pool.getConnection((err, connection) => {
    if (err) {
      return callback(err, null);
    } else {
      if (connection) {
        connection.query(sql, (error, result, fields) => {
          connection.release();
          if (error) return callback(error, null);
          return callback(null, result);
        });
      }
    }
  });
}
 
const query = (sql, callback) => {    
  executeQuery(sql, (err, result) => {
    if (err) return callback(err);
    return callback(null, result);
  });
}
 
module.exports = {
  query: query
}