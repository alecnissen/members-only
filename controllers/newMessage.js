const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

const Message = require("../models/messages");
const bcrypt = require("bcryptjs");

exports.new_message_get = (req, res, next) => { 
    res.render('newMessage', { title: 'New Message', user: req.user, message: {}});
};

exports.new_message_post = [ 

body("title", "Title must contain at least 3 characters ")
.trim()
.isLength({ min: 3 })
.escape(),
body("text", "text must contain at least 3 characters")
.trim()
.isLength({ min: 3 })
.escape(),

asyncHandler(async (req, res, next) => { 
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render("newMessage", {
        title: "Create Message",
        user: req.body,
        errors: errors.array(),
      });
      return;
    }

    try { 

        const message = new Message({
            title: req.body.title,
            text: req.body.text
        })
        
        console.log(message);
        await message.save();
        res.redirect('/');


    } catch (err) { 
        console.log(err);
        next(err);
    }

})

];


