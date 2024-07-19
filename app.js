require("dotenv").config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const passport = require('passport');
const methodOverride = require('method-override');

var indexRouter = require('./routes/index');
const createUserRouter = require('./routes/create_user');
const joinClubRouter = require('./routes/join_club');
const loginRouter = require('./routes/user_login');
const logOutRouter = require('./routes/log_out');
const newMessageRouter = require('./routes/new_message');

var app = express();

// Express session middleware
app.use(session({
  secret: process.env.SECRET_KEY_SESSION,
  resave: false,
  saveUninitialized: true
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// mongoose connection

// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = process.env.SECRET_KEY;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/create_user', createUserRouter);
app.use('/join_club', joinClubRouter);
app.use('/user_login', loginRouter);
app.use('/log_out', logOutRouter);
app.use('/new_message', newMessageRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
