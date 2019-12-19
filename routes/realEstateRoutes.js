'use strict';

const express = require('express');
const LoginController = require('../controllers/LoginController');

const api = express.Router();

const mdAuth = require('../middlewares/authenticated');

api.get('/login/:id', mdAuth.ensureAuth, LoginController.doSome);

module.exports = api;