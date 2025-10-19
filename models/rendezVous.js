const mongoose = require('mongoose');

const RendezVousSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  Message: { type: String, required: true },
  UserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  offreEmploiId: { type: mongoose.Schema.Types.ObjectId, ref: 'OffreEmplois', required: true },
});

module.exports = mongoose.model('RendezVous', RendezVousSchema);