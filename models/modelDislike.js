const mongoose = require('mongoose');
 const DislikesSchema = mongoose.Schema({
     DislikeId:{
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
module.exports= mongoose.model("modelDislikes",DislikesSchema )