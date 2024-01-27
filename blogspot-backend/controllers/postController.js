const { default: mongoose } = require('mongoose');
const postModel = require('../models/Posts.js')


const createPost = async(req,res)=>{
    try{
        if(req.body != undefined){
            console.log(req.body.postBody)
            const PostData = new postModel({
                PostId : req.body.postId,
                PostTitle : req.body.postTitle,
                PostDescription : req.body.postDescription,
                PostBody : req.body.postBody,
                AuthorId : req.body.authorId,
                PostAuthor : req.body.authorName,
                PostLike : req.body.postLike,
                Genre : req.body.genre,                
           });
           await PostData.save();  
           res.status(200).json({message : `Success`})         
        }else{
            res.status(400).json({message : "Body undefined"})
        }
        
    }
    catch(ex){
        console.log(ex)
    }
}

const getAllPost = async(req,res)=>{
    try{
        const Posts = await postModel.find();
        if(Posts != null){
           res.status(200).json(Posts)         
        }else{
            res.status(400).json({message : "Body undefined"})
        }       
    }
    catch(ex){
        console.log(ex)
    }
}

const getPost = async(req,res)=>{
    try{
        console.log(req.query.id);
        if(req.query?.id != undefined){
            let id = req.query.id;
            let postData = await postModel.find({AuthorId : id})
            if(postData != null){res.status(200).json(postData)}
            else{res.status(200).json({message : "No Records Found"})}
        }
        else{
            res.status(400).json({message : "Body undefined"})
        }        
    }
    catch(ex){console.log(ex)}
}


const updatePost = async (req,res) => {
    try{
        if(req.body && req.body.id != undefined){
            const postId = req.body?.id;
            const postData = await postModel.findOne({PostId : postId});
            if(postData != null){
                postData.PostId = req.body.postId,
                postData.PostTitle = req.body.postTitle,
                postData.PostDescription = req.body.postDesctiption,
                postData.PostBody = req.body.postBody,
                postData.AuthorId = req.body.authorId,
                postData.PostAuthor = req.body.authorName,
                postData.PostLike = req.body.postLike,
                postData.Genre = req.body.genre
                await postData.update();
                res.status(200).json({message : "Post Updated"})
            }
            else{
                res.status(500).json({message : "No record found"})
            }
            
        }
    }
    catch(ex){
        console.log(ex)
    }
}

module.exports = {createPost , updatePost , getAllPost , getPost}