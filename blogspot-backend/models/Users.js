const mongoose = require('mongoose')
var uuid = require('node-uuid').v1;

const userSchema = new mongoose.Schema({
    UserId : {type : String , default: uuid()},
    UserName : {type : String},
    Password : {type : String},
    ConfirmPassword : {type:String},
    Email : {type : String},
    ContactNumber : {type : String},
    CreatedDate : {type : Date , default : Date.now}
});


module.exports = mongoose.model("UserDetails" , userSchema);



