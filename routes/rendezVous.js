const express = require('express');
const router = express.Router();
const rendezVousCtrl = require('../controllers/rendezVous');

router.post('/rendezVous', rendezVousCtrl.createRendezVous);
module.exports = router;