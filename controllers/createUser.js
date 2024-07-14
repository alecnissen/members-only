// building out the controller which will render a form to create

// users, so the DB can be populated.

// create post controller, take form data, sanitize values,

// and populate DB,

const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

const User = require("../models/users");
const bcrypt = require("bcryptjs");

exports.create_user_get = (req, res, next) => {
  res.render("sign-up-form", { title: "Create User", user: {} });
};

// name and membership status not going through

exports.create_user_post = [
  body("firstName", "firstName must contain at least 3 characters")
    .trim()
    .isLength({ min: 3 })
    .escape(),
  body("lastName", "lastName must contain at least 3 characters")
    .trim()
    .isLength({ min: 3 })
    .escape(),
  body("email", "email must contain at least 3 characters")
    .trim()
    .isLength({ min: 3 })
    .escape()
    .isEmail(),
  body("password", "password must contain at least 3 characters")
    .trim()
    .isLength({ min: 3 })
    .escape(),
    
//   body("passwordConfirmation", "passwords must match").custom(
//     (value, { req }) => {
//       return value === req.body.password;
//     }
//   ),

  // body("membershipStatus", "membershipStatus must be completed")
  // .trim()
  // .escape(),

  asyncHandler(async (req, res, done, next) => {
    const errors = validationResult(req);

    // const hashedPassword = await bcrypt.hash(req.body.password, 10);
    // console.log(hashedPassword);


    
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        // password: hashedPassword,
        // membershipStatus: req.body.membershipStatus
    });
    
    
    console.log(user);
    
    // const match = await bcrypt.compare(user.password, req.body.password);
    // if (!match) {
    //   // passwords do not match!
    //   return done(null, false, { message: "Incorrect password" });
    // }


    // try { 
    //     const hashedPassword = await bcrypt.hash(req.body.password, 10);
    // } catch { 

    // }



    if (!errors.isEmpty()) {
      res.render("sign-up-form", {
        title: "Create User",
        user: user,
        errors: errors.array(),
      });
    } else {
      await user.save();
      console.log("user created", user);
      res.redirect("/");
    }



  }),
];
