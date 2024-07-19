const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

const User = require("../models/users");
const bcrypt = require("bcryptjs");

exports.new_message_get = (req, res, next) => { 
    res.render('newMessage', { title: 'New Message', user: req.user});
};

