const express = require('express');
const router = express.Router();
const formulaireContactCtrl = require('../controllers/formulaireContact');

router.post('/formulaireContact', formulaireContactCtrl.createFormulaireContact);
module.exports = router;