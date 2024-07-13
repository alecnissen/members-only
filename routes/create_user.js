const express = require('express');
const router = express.Router();
const createUserController = require('../controllers/createUser');

router.get('/', createUserController.create_user_get);

router.post('/', createUserController.create_user_post);

module.exports = router;