const RendezVous = require('../models/rendezVous');

// Créer un nouveau rendez-vous 
exports.createRendezVous = (req, res, next) => {
  const rendezVous = new RendezVous({
    date: req.body.date,
    message: req.body.message,
    UserId: req.body.UserId,
    OffreEmploiId: req.body.offreEmploiId,
  });

  rendezVous
    .save()
    .then(() => res.status(201).json({ message: 'Rendez-vous crée avec succes' }))
    .catch(error => res.status(400).json({ error }));
};