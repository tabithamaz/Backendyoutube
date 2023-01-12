const express = require("express")
const mongoose = require("mongoose")
const app = express();
const RouteComment = require('./route/routeCommnet')
const routeUser = require('./route/routeUser')

const url = `mongodb+srv://Tabitha:pater123@cluster0.3svugu9.mongodb.net/?retryWrites=true&w=majority`
const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })
 

   app.use(express.json());  

  app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
    app.use("/comment", RouteComment);
    app.use("/user",routeUser)
    

app.listen(4000, console.log("le serveur est lancé"));