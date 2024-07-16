const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");
const passport = require("passport");

const User = require("../models/users");

// exports.create_user_get = (req, res, next) => {
//     res.render("sign-up-form", { title: "Create User", user: {}, errors: [] });
//   };

exports.join_club_get = (req, res, next) => { 
    res.render('joinClub', { title: 'Become a member'});
} 

exports.join_club_post = (req, res, next) => { 

    body('memberPassword', "password must contain at least 3 characters")
    .trim()
    .isLength({ min: 3 })
    .escape()
    .toLowerCase()

    const desiredPassword = 'calculator';
    const userInput = req.body.memberPassword;

    console.log('user input entered', userInput);

    // console.log(User.firstName);

    // how do I access the user that just got created ? 
    // how do I pass the data from the user that just signed up to the join the club page?



    try { 







        // if the user input (input field in view) 
        // matches the desired password var 
        // display msg
        // update membership status 

        // how do I get userinput from the view 

        if (userInput === desiredPassword) { 
            console.log('CORRECT, YOU ARE GRANTED MEMBERSHIP!')
        } else { 
            console.log('WRONG ANSWER')
        }

        



    } catch (err) { 
        console.log(err);
    }


}