const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/users");
const bcrypt = require("bcryptjs");

exports.log_in_get = (req, res, next) => {
    res.render('log-out', { title: 'log-out' });
  };

  