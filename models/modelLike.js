const mongoose = require('mongoose');
 const LikesSchema = mongoose.Schema({
     likeId:{
         type: Number,
     },


     commentId:{
         type: Number,
 

     },
          userId:{
         type: Number,
         

          },


     
 }, {timestamps: true}
 )
module.exports= mongoose.model("modelLikes",LikesSchema )