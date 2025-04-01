 let express = require('express');
 import helmet from "helmet";
const mongoose = require('mongoose');
let cors = require('cors');


require("dotenv").config();
const mainRoute = require('./App/routes/mainRoute');

let app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(helmet());

app.use(mainRoute);


// // local host
// mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DBNAME}`)
//     .then( async() => {
//         app.listen(`${process.env.PORT}`); //http://localhost:8000
//     });

mongoose.connect(`${process.env.MONGO_CONNECTION_STRING}/${process.env.DBNAME}`)
    .then(() => {
        app.listen(`${process.env.PORT}`); //http://localhost:8000
});
  
 