const FormulaireContact = require('../models/formulaireContact');

exports.createFormulaireContact =  (req, res) => {
  const formulaireContact = new FormulaireContact({
    nom: req.body.nom,
    email: req.body.email,
    message: req.body.message,
  });

  formulaireContact
    .save()
    .then(() => res.status(201).json({ message: 'Formulaire de contact crée avec succes' }))
    .catch(error => res.status(400).json({ error }));
};