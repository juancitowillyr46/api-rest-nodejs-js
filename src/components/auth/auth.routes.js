const express = require('express');
const router = express.Router();
const controller = require('./auth.controller');
const prefix = '/auth';

router.post(prefix + '/login', controller.login);

// router.post('/register/', (req, res) => {
//     return res.send({data: 'POST Register'});
// });

module.exports = router;

