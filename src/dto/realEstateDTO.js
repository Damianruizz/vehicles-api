'use strict';

exports.getRealEstatesDTO = realEstateList => {
  return realEstateList.map(realEstate => {
    return realEstateDTO(realEstate);
  });
}

exports.getRealEstateDTO = realEstate => {
  return realEstateDTO(realEstate);
}

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