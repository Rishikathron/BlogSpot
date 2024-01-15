const userModel = require('../models/Users.js');
const bodyParser = require('body-parser');



const getallUsers = async (req,res) =>{ //3001 port
    try{
        console.log("Inside users");  
        // console.log(userModel.findOne({UserName:"Rishwanth"}));
        const userData = await userModel.find();
        console.log(userData)     
        res.status(200).json(userData);
    }
    catch(err){ res.status(400).json({message : "no users found"}); }
}

const loginUser = async (req,res)=>{
    try{
        if(req.query?.name != null && req.query?.password != null){
            const userData = await userModel.findOne({UserName : req.query.name});
            if(userData != null){
                
                if(userData.Password == req.query?.password){
                    res.status(200).json({message : "Logged in Successfully"});
                }
                else{
                    res.status(400).json({message : "Password missmatch"})
                }
            }
            else{
                res.status(400).json({message : "Please check the userName"})
            }
        }
        else{
            res.status(400).json({message : "UserName and Password Field should not be Empty"})
        }
    }
    catch(err){ res.status(400).json({message : err}); }
    
};



const registerUser = async (req,res)=>{
    console.log("inside register");
    try{
        if(req.body.name.length == null ){
            res.status(500).json({message : "req body is null"})
        }
        console.log("inside register try" + req.body);
        const userData = new userModel({
            
            UserName : req.body.name,            
            Password : req.body.password,
            ConfirmPassword : req.body.ConfirmPassword,
            Email : req.body.email,
            Contact : req.body.contact

        });
        console.log("inside register try 1");
        const newUser = await userData.save();
        res.status(200).json({message : `User ${req.body.name} is Registered Successfully`})
    }
    catch(err){console.log("inside register catch"); res.status(400).json({message : err})}   
    
}

module.exports = {getallUsers,registerUser,loginUser}
