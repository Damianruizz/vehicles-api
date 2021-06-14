'use strict';

const express = require('express');
const VehiclesController = require('../controllers/VehiclesController');
const mdVehicles = require('../middlewares/vehiclesMd');

const router = express.Router();

router.route('/vehicles')
  .get(VehiclesController.getAllVehicles)
  .put(mdVehicles.validateParamsToUpdate, VehiclesController.updateVehicle);

module.exports = router;