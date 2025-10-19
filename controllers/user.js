
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//inscription
exports.signup= (req, res, next)=>{
bcrypt.hash(req.body.password,10)
.then(hash=>{
  const user =new User({
    name:req.body.name,
    email:req.body.email,
    password:hash
  })
  .catch(error=> res.status(500).json({error}));
  user.save()
  .then(()=> res.status(201).json({message:"utilisateur crée"}))
  .catch(error=> res.status(400).json({error}))
  .catch(error=>{
    res.status(500).json({error})
  })
  })
};

//connexion
exports.login= (req, res, next)=>{
User.findOne({email:req.body.email})
.then(User=>{
  if(User==null){
    res.status(401).json({error:"utilisateur introuvable"})
  }
  bcrypt.compare(req.body.password,User.password)
  .then(valid=>{
    if(!valid){
      res.status(401).json({error:"mot de passe incorrect"})
    }
    res.status(200).json({
      UserId:User._id,
      name:User.name,
      email:User.email,
      token: jwt.sign({UserId:User._id},
        "RANDOM_TOKEN_SECRET",
        {expiresIn:"24h"})
    })
  })
  .catch(error=> res.status(500).json({error}))
})
};