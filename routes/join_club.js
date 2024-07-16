const express = require('express');
const router = express.Router();

const joinClubController = require('../controllers/joinClub');

router.get('/', joinClubController.join_club_get);

router.post('/', joinClubController.join_club_post);

module.exports = router;