const express = require('express');
const router = express.Router();
const blogCtrl = require('../controllers/blog');

router.post('/blog', blogCtrl.createBlog);
module.exports = router;