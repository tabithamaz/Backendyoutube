
const ModelComment  = require("../models/modelComment")

 
 exports.CreateComment=(req, res, next) => {
  const comment = new ModelComment ({
    userId: req.body.userId,
     videoId: req.body.videoId,
    desc: req.body.desc,
     imgUrl: req.body.imgUrl,
    
  });
  comment
    .save()
    .then((comment) =>
      res.status(200).json({ message: "un commentaire a été laissé!", comment })
    )
    .catch((error) => res.status(400).json({ error }));

}


exports.getcomment=(req,res,next) =>{
        ModelComment.find()
        .then((comment) =>
        res.status(200).json({ comment})
         ) 
        .catch((error)=> res.statut(400).json({error}));

}