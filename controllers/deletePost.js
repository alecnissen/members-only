const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");
const Message = require("../models/messages");
const User = require("../models/users");

exports.delete_post = [ 
    
    asyncHandler(async (req, res, next) => { 
        const messageId = req.params.id;
        const message = await Message.findByIdAndDelete(messageId);
    
        if (!message) { 
              // Item not found, send a 404 error to indicate not found
           const err = new Error('message not found');
           err.status = 404;
           return next(err); 
        }
        res.redirect('/'); 
    })
    
];