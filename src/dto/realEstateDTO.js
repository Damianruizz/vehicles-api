'use strict';

/**
* @desc DTO para todas las propiedades inmobiliarias
* @params {Array}
*/
exports.getRealEstatesDTO = realEstateList => {
  return realEstateList.map(realEstate => {
    return realEstateDTO(realEstate);
  });
}

/**
* @desc DTO para una propiedad inmobiliaria
* @params {Object}
*/
exports.getRealEstateDTO = realEstate => {
  return realEstateDTO(realEstate);
}

/**
* @desc DTO base
* @params {Object}
*/
const realEstateDTO = realEstate => {
  return {
    idRealEstate: realEstate.id_real_estate || realEstate.idRealEstate,
    title: realEstate.title,
    cost: realEstate.cost,
    image: realEstate.image,
    description: realEstate.description,
    address: realEstate.address,
    ownerData: realEstate.owner_data || realEstate.ownerData
  };
}