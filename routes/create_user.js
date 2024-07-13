const express = require('express');
const router = express.Router();
const createUserController = require('../controllers/createUser');

router.get('/', createUserController.create_user_get);


module.exports = router;