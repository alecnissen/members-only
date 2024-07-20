var express = require('express');
var router = express.Router();
const Message = require('../models/messages');

/* GET home page. */
router.get('/', async function(req, res, next) {

  try { 
    const messages = await Message.find();
    res.render('index', { title: 'Express', user: req.user, messages: messages });
  } catch (err) { 
    next(err);
  }
});

module.exports = router;
