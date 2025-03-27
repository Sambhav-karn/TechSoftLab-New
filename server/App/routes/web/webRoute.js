let express = require('express');
const { userAuth } = require('./userAuth');

let webRoute = express.Router();




webRoute.use("/user", userAuth)













module.exports = webRoute;
