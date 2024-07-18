const express = require('express');
const router = express.Router();

const loginController = require('../controllers/log_in');

router.get('/', loginController.log_in_get);

router.post('/', loginController.log_in_post);

module.exports = router;

