const mongoose = require('mongoose');
 const UserSchema = mongoose.Schema({
     name:{
         type: String,
         required: true,
     },
      namecomplet:{
        type: String,
      },
     email:{
         type: String,
         required: true,
         unique: true,
     },
    img:{
         type: String,
         
     },

    lienfacebook:{
        type: String,

    },

    lieninstagram:{
        type: String,

    },


    lientwitter:{
        type: String,

    },


     
 }, {timestamps: true}
 );
 module.exports= mongoose.model("ModelUser",UserSchema);