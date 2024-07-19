const express = require('express');
const router = express.Router();

const logOutController = require('../controllers/log_out');

router.delete('/', (req, res) => { 
   req.logOut((err) => {
    if (err) { 
        return next(err);
    } 
    res.redirect('/');
   })
});

module.exports = router;