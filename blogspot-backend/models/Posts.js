const mongoose = require('mongoose');
var uuid = require('node-uuid').v1;

const PostSchema = new mongoose.Schema({

    PostId : {type : String , default: uuid()},
    PostTitle : {type : String},
    PostDescription : {type : String},
    PostBody : {type : String},
    AuthorId : {type : String},
    PostAuthor : {type : String},
    PostLike : {type : String},
    Genre : {type : String},
    CreatedDate : {type : Date , default : Date.now},
    ModifiedDate : {type : Date}

})

module.exports = mongoose.model("posts",PostSchema)