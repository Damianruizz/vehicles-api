'use strict';

const RealEstateModel = require('../models/RealEstateModel');
const dto = require('../dto/realEstateDTO');

exports.getAllRealEstates = (req, response) => {
  RealEstateModel.getAllRealEstates((error, data) => {
    if(!error) {
      response.status(200).json({
        success: true,
        realEstates: dto.getRealEstatesDTO(data)
      });
    }
  });
}

exports.createRealEstate = (req, response) => {
  RealEstateModel.insertRealEstate(req.body, (error, data) => {
    if (error) return genericError(response, error, 500);
    const elementCreated = Object.assign({}, req.body, { id_real_estate: data.insertId });
    response.status(200).json({
      success: true,
      element: dto.getRealEstateDTO(elementCreated)
    });
  });
}

exports.updateRealEstate = (req, response) => {
  RealEstateModel.updateRealEstate(req.body, (error, data) => {
    if (error) return genericError(response, error, 500);
    response.status(200).json({
      success: true,
      element: dto.getRealEstateDTO(req.body)
    });
  });
}

exports.deleteRealEstate = (req, response) => {
  RealEstateModel.deleteRealEstate(req.body, (error, data) => {
    if (error) return genericError(response, error, 500);
    response.status(200).json({
      success: true
    });
  });
}

/**
* @desc devuelve la estructura generica de un error
* @params {Object} {String} {Number}
*/
const genericError = (res, error, errorCode) => {
  res.status(errorCode).json({
    success: false,
    errorMessage: error
  });  
}