const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

const User = require("../models/users");

// exports.create_user_get = (req, res, next) => {
//     res.render("sign-up-form", { title: "Create User", user: {}, errors: [] });
//   };

exports.join_club_get = (req, res, next) => { 
    res.render('joinClub', { title: 'Become a member'});
} 