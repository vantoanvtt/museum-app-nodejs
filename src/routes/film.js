const express = require('express');
const router = express.Router();

const filmController = require('../app/controllers/filmController');

router.get('/:id', filmController.detail);
router.get('/', filmController.index);



module.exports = router;