const express = require('express');
const router = express.Router();

const newMessageController = require('../controllers/newMessage');

router.get('/', newMessageController.new_message_get);

module.exports = router;