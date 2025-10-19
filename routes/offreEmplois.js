const express = require('express');
const router = express.Router();
const offreEmploisCtrl = require('../controllers/offreEmplois');

router.post('/offreEmplois', offreEmploisCtrl.createOffreEmploi);
module.exports = router;