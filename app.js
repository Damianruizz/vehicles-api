'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const realEstateRoutes = require('./src/routes/realEstateRoutes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', realEstateRoutes);

module.exports = app;