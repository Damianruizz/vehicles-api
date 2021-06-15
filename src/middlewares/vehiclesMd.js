'use strict';

/**
* @desc validates the parameters to receive, to update info of a car under maintenance
* @params {Object} {Object} {Function}
* @return {Function}
*/
exports.validateParamsToUpdate = (req, res, next) => {
  if (!req.body.id) {
    const error = new Error('Parametros faltantes');
    error.httpStatusCode = 400;
    return next(error);
  }
  next();
}