'user strict';

var dbConnection = require('../../db.js');

/**
* @desc obtiene todos los registros de la tabla real_estate
* @params {Function}
*/
exports.getAllRealEstates = callback => {
  dbConnection.query('select * from real_estate', callback);
}

/**
* @desc inserta un elemento en la tabla real_estate
* @params {Function}
*/
exports.insertRealEstate = (req, callback) => {
  const queryCreate = `insert into real_estate (title, cost, image, description, address, owner_data) 
    values ('${req.title}', '${req.cost}', '/img/default.jpg', '${req.description}', '${req.address}', '${req.ownerData}')
  `;
  dbConnection.query(queryCreate, callback);
}

/**
* @desc actualiza un elemento de la tabla real_estate
* @params {Function}
*/
exports.updateRealEstate = (req, callback) => {
  const queryUpdate = `update real_estate 
    set title='${req.title}', cost='500000', description='${req.description}', address='${req.address}', owner_data='${req.ownerData}' 
    where id_real_estate=${req.idRealEstate}
  `;
  dbConnection.query(queryUpdate, callback);
}

/**
* @desc elimina un elemento de la tabla real_estate
* @params {Function}
*/
exports.deleteRealEstate = (req, callback) => {
  const queryDelete = `delete from real_estate where id_real_estate=${req.idRealEstate}`;
  dbConnection.query(queryDelete, callback);
}