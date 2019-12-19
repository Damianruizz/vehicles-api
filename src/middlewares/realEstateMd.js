'use strict';

/**
* @desc valida los parametros a recibir para crear una propiedad inmobiliaria
* @params {Object} {Object} {Function}
* @return {Function}
*/
exports.validateParams = (req, res, next) => {
  if (!req.body.title || !req.body.ownerData || !req.body.address || !req.body.cost) {
    const error = new Error('Parametros faltantes');
    error.httpStatusCode = 400;
    return next(error);
  }
  next();
}