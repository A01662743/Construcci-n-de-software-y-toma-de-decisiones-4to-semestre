const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home.controller.js');
//
router.get('/home', homeController.get_home);
router.get('/', homeController.get_home);

module.exports = router;