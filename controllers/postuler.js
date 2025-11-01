const Postuler = require('../models/postuler');

// Créer une nouvelle postulation
exports.createPostuler = (req, res, next) => {
  const postuler = new Postuler({
    candidatName: req.body.candidatName,
    candidatEmail: req.body.candidatEmail,
    offreEmploiId: req.body.offreEmploiId,
  });  

  postuler.save()
    .then(() => res.status(201).json({ message: 'Postulation crée avec succes' }))
    .catch(error => res.status(400).json({ error }));
};