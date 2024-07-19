const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/users");
const bcrypt = require("bcryptjs");



// Passport configuration
passport.use(
  new LocalStrategy(
    { usernameField: 'email', passwordField: 'password', passReqToCallback: true },
    async (req, email, password, done) => {
      try {
        const user = await User.findOne({ email: email });
        if (!user) {
          console.log('Incorrect email');
          return done(null, false, { message: 'Incorrect email' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          console.log('Incorrect password');
          return done(null, false, { message: 'Incorrect password' });
        }

        console.log('MATCH');
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

// Serialization and deserialization
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

// Login controllers
exports.log_in_get = (req, res, next) => {
  res.render('login', { title: 'Login' });
};

exports.log_in_post = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      console.log('Login failed');
      return res.redirect('/user_login');
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      console.log('Login successful');
      return res.redirect('/');
    });
  })(req, res, next);
};

