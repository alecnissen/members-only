// building out the controller which will render a form to create 

// users, so the DB can be populated. 

// const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

const User = require("../models/users");

exports.create_user_get = (req, res, next) => { 
    res.render('sign-up-form', { title: 'Create User' });
};


