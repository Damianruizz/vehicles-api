'use strict';

const VehiclesModel = require('../models/vehiclesModel');

/**
* @desc returns the generic structure of an error
* @params {Object} {String} {Number}
*/
const genericError = (res, error, errorCode) => {
  res.status(errorCode).json({
    success: false,
    errorMessage: error
  });  
}

/**
* @desc GET to get all vehicles under maintenance
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
* @desc PUT to update a vehicle under maintenance
* @params {Object} {Object}
*/
exports.updateVehicle = (req, response) => {
  VehiclesModel.updateVehicle(req.body, (error, data) => {
    if (error) return genericError(response, error, 500);
    VehiclesModel.getVehicle(req.body, (error, data) => {
      if(!error) {
        response.status(200).json({
          success: true,
          vehicle: data[0] ? data[0] : {},
        });
      }
    });
  });
}