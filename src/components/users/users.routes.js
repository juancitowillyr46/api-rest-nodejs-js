const express = require('express');
const router = express.Router();
const controller = require('./users.controller');
const prefix = '/users';

router.get(prefix, controller.userGetAll);

router.get(prefix + '/:id', controller.userGetById);

router.post(prefix, controller.userPost);

router.put(prefix + '/:id', controller.userPut);

router.delete(prefix + '/:id', controller.userDelete);

module.exports = router;