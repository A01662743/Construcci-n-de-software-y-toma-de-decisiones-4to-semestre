const express = require('express');
const router = express.Router();

const isAuth = require('../util/is-auth.js')
const canView = require('../util/can-view.js')
const siteController = require('../controllers/site.controller.js');
const canCreate = require('../util/can-create');
//sites/
router.get('/', isAuth, siteController.get_list)
router.get('/new', isAuth, canCreate, siteController.get_new);
router.get('/nuevo', isAuth, canCreate, siteController.get_new);
router.get('/add', isAuth, canCreate, siteController.get_new);
router.post('/new', isAuth, canCreate, siteController.post_new);
router.post('/nuevo', isAuth, canCreate, siteController.post_new);
router.post('/add', isAuth, canCreate, siteController.get_new);
router.use('/:sites_id', isAuth, canView, siteController.get_list);
router.use(isAuth, canView, siteController.get_list);

module.exports = router;