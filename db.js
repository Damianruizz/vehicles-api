'use-strict';

const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: '127.0.0.1',
  user: 'root',
  password: 'Damianelrey',
  database: 'vehicles',
  debug: false 
});

/**
* @desc ejecuta una sentencia SQL recibida por parametro
* @params {String} {Function}
*/
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

/**
* @desc funcion main para ejecucion de sentencias sql
* @params {String} {Function}
*/
const query = (sql, callback) => {    
  executeQuery(sql, (err, result) => {
    if (err) return callback(err);
    return callback(null, result);
  });
}
 
module.exports = {
  query: query
}