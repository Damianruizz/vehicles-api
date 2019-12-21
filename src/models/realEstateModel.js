'user strict';

var dbConnection = require('../../db.js');

exports.getAllRealEstates = callback => {
  dbConnection.query('select * from real_estate', callback);
}

exports.insertRealEstate = (req, callback) => {
  const queryCreate = `insert into real_estate (title, cost, image, description, address, owner_data) 
    values ('${req.title}', '${req.cost}', '/img/default.jpg', '${req.description}', '${req.address}', '${req.ownerData}')
  `;
  dbConnection.query(queryCreate, callback);
}

exports.updateRealEstate = (req, callback) => {
  const queryUpdate = `update real_estate 
    set title='${req.title}', cost='500000', description='${req.description}', address='${req.address}', owner_data='${req.ownerData}' 
    where id_real_estate=${req.idRealEstate}
  `;
  dbConnection.query(queryUpdate, callback);
}

exports.deleteRealEstate = (req, callback) => {
  const queryDelete = `delete from real_estate where id_real_estate=${req.idRealEstate}`;
  dbConnection.query(queryDelete, callback);
}