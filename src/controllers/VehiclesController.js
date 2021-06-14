'use strict';

const VehiclesModel = require('../models/vehiclesModel');

/**
* @desc GET para obtener todos los vehiculos en mantenimiento
* @params {Object} {Object}
*/
exports.getAllVehicles = (req, response) => {
  VehiclesModel.getAllVehicles((error, data) => {
    if(!error) {
      response.status(200).json({
        success: true,
        vehicles: data
      });
    }
  });
}

/**
* @desc PUT para actualizar un vehiculo en mantenimiento
* @params {Object} {Object}
*/
exports.updateVehicle = (req, response) => {
  VehiclesModel.updateVehicle(req.body, (error, data) => {
    if (error) return genericError(response, error, 500);
    response.status(200).json({
      success: true,
      vehicle: req.body
    });
  });
}