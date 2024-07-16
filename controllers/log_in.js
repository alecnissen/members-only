const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

exports.log_in_get = (req, res, next) => { 
    res.render('login', { title: "Login"});
};

