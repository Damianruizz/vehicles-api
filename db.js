'use-strict';

const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'us-cdbr-east-04.cleardb.com',
  user: 'be676751ad31bc',
  password: '2a9fb2a7',
  database: 'heroku_f5fff5e9541f487',
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