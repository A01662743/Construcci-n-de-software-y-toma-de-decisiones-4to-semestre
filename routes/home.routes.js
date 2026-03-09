const express = require('express');
const router = express.Router();

const isAuth = require('../util/is-auth.js')
const homeController = require('../controllers/home.controller.js');
//
router.get('/home', isAuth, homeController.get_home);
router.get('/', isAuth, homeController.get_home);

module.exports = router;