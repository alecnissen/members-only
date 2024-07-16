const express = require('express');
const router = express.Router();

const loginController = require('../controllers/log_in');

router.get('/', loginController.log_in_get);

module.exports = router;

