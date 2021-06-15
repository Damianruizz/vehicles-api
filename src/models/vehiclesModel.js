'user strict';

var dbConnection = require('../../db.js');

/**
* @desc gets all the records from the vehicles_under_maintenance table
* @params {Function}
*/
exports.getAllVehicles = callback => {
  dbConnection.query('select * from vehicles_under_maintenance', callback);
}

/**
* @desc gets one record from the vehicles_under_maintenance table
* @params {Function}
*/
exports.getVehicle = (req, callback) => {
  dbConnection.query(`select * from vehicles_under_maintenance where id=${req.id}`, callback);
}

/**
* @desc updates an item in the vehicles_under_maintenance table
* @params {Function}
*/
exports.updateVehicle = (req, callback) => {
  const queryUpdate = `update vehicles_under_maintenance 
    set person='${req.person}', estimatedate=${req.estimatedate ? "'"+req.estimatedate+"'" : null}, vehicle_id='${req.vehicle_id}', in_maintenance='${req.in_maintenance}'
    where id=${req.id}
  `;
  dbConnection.query(queryUpdate, callback);
}