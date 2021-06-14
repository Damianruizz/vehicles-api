'user strict';

var dbConnection = require('../../db.js');

/**
* @desc obtiene todos los registros de la tabla vehicles_under_maintenance
* @params {Function}
*/
exports.getAllVehicles = callback => {
  dbConnection.query('select * from vehicles_under_maintenance', callback);
}

/**
* @desc actualiza un elemento de la tabla vehicles_under_maintenance
* @params {Function}
*/
exports.updateVehicle = (req, callback) => {
  const queryUpdate = `update vehicles_under_maintenance 
    set person='${req.person}', estimatedate='${req.estimatedate}', vehicle_id='${req.vehicle_id}' 
    where id=${req.id}
  `;
  dbConnection.query(queryUpdate, callback);
}