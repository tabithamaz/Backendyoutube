const  express = require('express')
const modelComment = require('../models/modelComment')
const routeComment = express.Router()
const commentCtrl=require('../controller/controllerComment')

routeComment.get("/", commentCtrl.getcomment);
routeComment.post("/add", commentCtrl.CreateComment);



module.exports=routeComment;