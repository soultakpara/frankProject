const mongoose = require('mongoose');
const PostulerSchema = new mongoose.Schema({
  candidatName: { type: String, required: true },
  candidatEmail: { type: String, required: true },
  OffreEmploiId: { type: mongoose.Schema.Types.ObjectId, ref: 'OffreEmplois', required: true },
  datePostulation: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Postuler', PostulerSchema);