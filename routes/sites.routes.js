const express = require('express');
const router = express.Router();

const isAuth = require('../util/is-auth.js')
const siteController = require('../controllers/site.controller.js');
//sites/
router.get('/', isAuth, siteController.get_list)
router.get('/new', isAuth, siteController.get_new);
router.get('/nuevo', isAuth, siteController.get_new);
router.get('/add', isAuth, siteController.get_new);
router.post('/new', isAuth, siteController.post_new);
router.post('/nuevo', isAuth, siteController.post_new);
router.post('/add', isAuth, siteController.get_new);
router.use('/:sites_id', isAuth, siteController.get_list);
router.use(siteController.get_list);

module.exports = router;