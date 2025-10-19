const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
image : { type: String, required: true },

titre: { type: String, required: true },

date : { type: Date, required: true },

description: { type: String, required: true },
});

module.exports = mongoose.model('Blog', BlogSchema);