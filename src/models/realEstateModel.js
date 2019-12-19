'user strict';

var dbConnection = require('../../db.js');

exports.getAllRealEstates = callback => {
  dbConnection.query('select * from real_estate', callback);
}

exports.insertRealEstate = (req, callback) => {
  /*INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
  VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');*/
  dbConnection.query(`insert into real_estate (title, cost, image, description, address, owner_data) values ('${req.title}', '${req.cost}', '${req.image}', '${req.description}', '${req.address}', '${req.ownerData}')`, callback);
}