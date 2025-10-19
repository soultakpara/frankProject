const mongoose = require('mongoose');

const OffreEmploisSchema = new mongoose.Schema({
  
  titre: { type: String, required: true },

  description: { type: String, required: true },

  entreprise: { type: String, required: true },

  lieu: { type: String, 
    enum:['Paris', 'Lyon', 'Marseille', ' lille'],
    required: true, 
    default: 'Paris' },

    typeContrat: { type: String, 
    enum:['CDI', 'CDD', 'Intérim', 'Stage', 'Freelance'],
    required: true, 
    default: 'CDI' },

    dureeDuContrat: { type: String, required: false },

  salaire: { type: Number, required: false },

});
module.exports = mongoose.model('OffreEmplois', OffreEmploisSchema);