'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const realEstateRoutes = require('./src/routes/realEstateRoutes');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE');
  next();
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', realEstateRoutes);

module.exports = app;