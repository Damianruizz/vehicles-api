'use strict';

const RealEstateModel = require('../../src/models/RealEstateModel');
const dto = require('../dto/realEstateDTO');

/**
* @desc GET para obtener todas las propiedades inmobiliarias
* @params {Object} {Object}
*/
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

/**
* @desc POST para crear una propiedad inmobiliaria
* @params {Object} {Object}
*/
exports.createRealEstate = (req, response) => {
  RealEstateModel.insertRealEstate(req.body, (error, data) => {
    if (error) return genericError(response, error, 500);
    const elementCreated = Object.assign({}, req.body, { id_real_estate: data.insertId });
    response.status(200).json({
      success: true,
      realEstate: dto.getRealEstateDTO(elementCreated)
    });
  });
}

/**
* @desc PUT para actualizar una propiedad inmobiliaria
* @params {Object} {Object}
*/
exports.updateRealEstate = (req, response) => {
  RealEstateModel.updateRealEstate(req.body, (error, data) => {
    if (error) return genericError(response, error, 500);
    response.status(200).json({
      success: true,
      realEstate: dto.getRealEstateDTO(req.body)
    });
  });
}

/**
* @desc DELETE de la propiedad inmobiliaria
* @params {Object} {Object}
*/
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