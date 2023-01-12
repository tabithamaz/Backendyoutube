const mongoose = require('mongoose');
 const CommentSchema = mongoose.Schema({
     userId:{
        type: String,
     },
     videoId:{
        type: String,
     },
    desc:{
        type: String,
        required: true,
    },
    imgUrl:{
        type: String, 
    },
}, 
{
    timestamps: true
})
module.exports= mongoose.model("ModelComment",CommentSchema )