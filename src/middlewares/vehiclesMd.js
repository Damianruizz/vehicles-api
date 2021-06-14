'use strict';

/**
* @desc valida los parametros a recibir, para actualizar info de un auto en mantenimiento
* @params {Object} {Object} {Function}
* @return {Function}
*/
exports.validateParamsToUpdate = (req, res, next) => {
  console.log("*** req ***", req);
  if (!req.body.id) {
    const error = new Error('Parametros faltantes');
    error.httpStatusCode = 400;
    return next(error);
  }
  next();
}