const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    UserName : {type : String},
    Password : {type : String},
    ConfirmPassword : {type:String},
    Email : {type : String},
    ContactNumber : {type : Number},
    CreatedDate : {type : Date , default : Date.now}
});


module.exports = mongoose.model("UserDetails" , userSchema);



