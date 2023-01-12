const ModelUser  = require("../models/modelUser")

 exports.CreateUser=(req, res, next) => {
  const user = new ModelUser ({
    name: req.body.name,
    email: req.body.email,
    img: req.body.img,
    lienfacebook: req.body.lienfacebook,
    lieninstagram:  req.body.lieninstagram,
    lientwitter:  req.body.lientwitter,
  });
  user
    .save()
    .then((user) =>
      res.status(200).json({ message: "un utilisateur a été créé !", user: user })
    )
    .catch((error) => res.status(400).json({ error }));

}

exports.getUsers = (req, res, next) => {
  
  ModelUser.find().then((users) => {
    res.status(200).json(users)
  })
  .catch((error) => {
    res.status(400).json({
      error: error
    })
  })
}
