require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const connectDB = require('./config/dbConnection')
var cors = require('cors')
const Auth = require('./routes/authenticationRoute.js')
const postRoute = require('./routes/PostRoute.js')



const app = express();
const port = process.env.PORT || port;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());

app.use('/auth' ,Auth)
app.use('/posts',postRoute)

connectDB();


mongoose.connection.once('open' , ()=>{
    console.log('Connected to Database');
    app.listen(port,()=>console.log("Listining to Server"));
})
