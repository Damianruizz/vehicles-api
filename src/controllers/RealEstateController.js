'use strict';

const RealEstateModel = require('../models/RealEstateModel');

exports.getAllRealEstates = (req, response) => {
  RealEstateModel.getAllRealEstates((error, data) => {
    if(!error) {
      response.status(200).json({
        message: 'Real Estates',
        real_estates: data
      });
    }
  });
}

exports.createRealEstate = (req, response) => {
  console.log('req en controller', req.body);
  RealEstateModel.insertRealEstate(req.body, (error, data) => {
    console.log('data', data);
    if (error) return genericError(response, error, 500);
    response.status(200).json({
      message: 'Creado con éxito'
    });
  });
}

/**
* @desc devuelve la estructura generica de un error
* @params {Object} {String} {Number}
*/
const genericError = (res, error, errorCode) => {
  res.status(errorCode).json({
    errorMessage: error,
  });  
}