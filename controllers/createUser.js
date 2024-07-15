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

    // check("email").isEmail().withMessage('Invalid email address'),

//   body("confirmPassword", "passwords must match").custom(
//     (value, { req }) => {
//         if (value !== req.body.password) { 
//             throw new Error("Passwords must match")
//         }
//         return;
//     }
//   ),

  // body("membershipStatus", "membershipStatus must be completed")
  // .trim()
  // .escape(),

  asyncHandler(async (req, res, done, next) => {
    const errors = validationResult(req);

    // console.log(hashedPassword);
    
    try { 
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            // password: req.body.password,
            password: hashedPassword,
            // membershipStatus: req.body.membershipStatus
        });

        await user.save();
        console.log("User created:", user);
        res.redirect("/");

        if (!errors.isEmpty()) {
            res.render("sign-up-form", {
              title: "Create User",
              user: user,
              errors: errors.array(),
            });
            return;
          } 


    } catch (err) { 
        console.log(err);
       
    }
    
    

  }),
];
