const express = require('express');
const router = express.Router();

const siteController = require('../controllers/site.controller.js');
//sites/
router.get('/', siteController.get_list)
router.get('/new', siteController.get_new);
router.get('/nuevo', siteController.get_new);
router.get('/add', siteController.get_new);
router.post('/new', siteController.post_new);
router.post('/nuevo', siteController.post_new);
router.post('/add', siteController.get_new);
router.use('/:sites_id', siteController.get_list);
router.use(siteController.get_list);

module.exports = router;