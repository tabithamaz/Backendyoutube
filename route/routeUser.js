const  express = require('express')
const routeUser = express.Router()
const userCtrl= require('../controller/controllerUser')

routeUser.post("/add", userCtrl.CreateUser);
routeUser.get("/", userCtrl.getUsers);

module.exports=routeUser;
