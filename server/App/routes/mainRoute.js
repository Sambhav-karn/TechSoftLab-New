let express = require('express');

const webRoute = require('./web/webRoute');
let mainRoute = express.Router();


mainRoute.use("/web", webRoute)  //http://localhost:8000/web

module.exports=mainRoute;