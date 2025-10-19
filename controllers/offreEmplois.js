const OffreEmplois = require('../models/offreEmplois');

// Créer une nouvelle offre d'emploi
exports.createOffreEmploi = (req, res, next) => {
  const offreEmploi = new OffreEmplois({
    titre: req.body.titre,
    description: req.body.description,  
    entreprise: req.body.entreprise,
    lieu: req.body.lieu,
    typeContrat: req.body.typeContrat,
    dureeDuContrat: req.body.dureeDuContrat,
    salaire: req.body.salaire,
  });

  offreEmploi
    .save()
    .then(() => res.status(201).json({ message: 'Offre d\'emploi crée avec succes' }))
    .catch(error => res.status(400).json({ error }));
};