// building out the controller which will render a form to create

// users, so the DB can be populated.

// create post controller, take form data, sanitize values,

// and populate DB,

const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

const User = require("../models/users");
const bcrypt = require("bcryptjs");


exports.create_user_get = (req, res, next) => {
  res.render("sign-up-form", { title: "Create User", user: {}, errors: [] });
};


exports.create_user_post = [
  body("firstName", "First name must contain at least 3 characters")
    .trim()
    .isLength({ min: 3 })
    .escape(),
  body("lastName", "Last name must contain at least 3 characters")
    .trim()
    .isLength({ min: 3 })
    .escape(),
  body("email", "Email must be valid")
    .trim()
    .isEmail()
    .escape(),
  body("password", "Password must contain at least 3 characters")
    .trim()
    .isLength({ min: 3 })
    .escape(),


  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render("sign-up-form", {
        title: "Create User",
        user: req.body,
        errors: errors.array(),
      });
      return;
    }

    try {
      const existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
        res.render("sign-up-form", {
          title: "Create User",
          user: req.body,
          errors: [{ msg: "Email is already taken" }],
        });
        return;
      }

      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
        membershipStatus: req.body.membershipStatus
      });

      console.log(user);

      await user.save();
      console.log("User created:", user);
      res.redirect("/");
    } catch (err) {
      console.log(err);
      next(err);
    }
  }),
];


