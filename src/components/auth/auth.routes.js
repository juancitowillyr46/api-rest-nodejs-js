const express = require('express');
const router = express.Router();
const controller = require('./auth.controller');
const prefix = '/security';

router.post(prefix + '/login', controller.login);

router.post(prefix + '/register', controller.register);

module.exports = router;

