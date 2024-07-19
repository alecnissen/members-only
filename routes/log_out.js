const express = require('express');
const router = express.Router();

const logOutController = require('../controllers/log_out');

router.delete('/', logOutController.log_in_get);

