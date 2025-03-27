const multer = require('multer');
let express = require('express');
const { sendEnq } = require('../../controller/web/enqController');
let userAuth = express.Router();



let uploads = multer({ storage: "" })


userAuth.post("/enq", sendEnq)


module.exports = {userAuth};
// http://localhost:8000/web/user/enq