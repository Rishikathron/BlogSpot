require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const mongodb = require('mongodb')
const bodyParser = require('body-parser')
const connectDB = require('./config/dbConnection')
const Auth = require('./routes/authenticationRoute.js')




const app = express();
const port = process.env.PORT || port;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/auth' ,Auth)

connectDB();


mongoose.connection.once('open' , ()=>{
    console.log('Connected to Database');
    app.listen(port,()=>console.log("Listining to Server"));
})
