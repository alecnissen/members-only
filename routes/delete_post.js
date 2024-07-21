const express = require('express');
const router = express.Router();
const deletePostControler = require('../controllers/deletePost');

router.delete('/:id', deletePostControler.delete_post);

module.exports = router;