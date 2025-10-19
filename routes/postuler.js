const express = require('express');
const router = express.Router();
const postulerCtrl = require('../controllers/postuler');

router.post('/postuler', postulerCtrl.createPostuler);
module.exports = router;