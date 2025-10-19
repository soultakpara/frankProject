const blog = require('../models/blog');

exports.createBlog =  (req, res) => {
  const blog = new blog({
    image: req.body.image,
    titre: req.body.titre,
    date: req.body.date,
    description: req.body.description,
  });

  blog
    .save()
    .then(() => res.status(201).json({ message: 'Blog crée avec succes' }))
    .catch(error => res.status(400).json({ error })); 
};