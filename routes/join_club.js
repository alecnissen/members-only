const express = require('express');
const router = express.Router();

const joinClubController = require('../controllers/joinClub');

router.get('/', joinClubController.join_club_get);


module.exports = router;