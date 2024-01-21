const userModel = require('../models/Users.js');




const getallUsers = async (req,res) =>{ 
    try{
        console.log("insile get all users")
        const userData = await userModel.find();
        if(userData != null){
            console.log(userData);     
            res.status(200).json(userData);
        }
        
    }
    catch(err){ res.status(400).json({message : "no users found"}); }
}

const getUserDetail = async (req,res) =>{ 
    try{
        console.log("Inside users");  
        console.log(typeof (req.query.id), typeof("4971c45b-8636-4cf4-9220-dfac3aed896a"))
        let id = req.query.id;
        const userData = await userModel.findOne({UserId : id });
        if(userData == null){
            res.status(200).json({message : "No Users Found" });
        }else{
            console.log(userData);    
            res.status(200).json(userData);
        }        
    }
    catch(err){ res.status(400).json({message : "error something went wrong..."}); }
}

const loginUser = async (req,res)=>{
    try{
        console.log("Inside login user" + req.body.name)
        if(req.body?.name != null && req.body?.password != null){
            
            const userData = await userModel.findOne({Email : req.body.name});
            console.log(userData)
            if(userData != null){
                
                if(userData.Password == req.body?.password){
                    res.status(200).json({userData , message : "Logged in Successfully"});
                }
                else{
                    res.status(400).json({message : "Password missmatch"})
                }
            }
            else{
                res.status(200).json({message : "Please check the userName"})
            }
        }
        else{
            res.status(200).json({message : "UserName and Password Field should not be Empty"})
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
        console.log("inside register try" + req.body.contact);
        const userData = new userModel({
            UserId : req.body.userId,
            UserName : req.body.name,            
            Password : req.body.password,
            ConfirmPassword : req.body.ConfirmPassword,
            Email : req.body.email,
            ContactNumber : Number(req.body.contact)

        });
        console.log("inside register try 1");
        const newUser = await userData.save();
        res.status(200).json({message : `Success`})
    }
    catch(err){console.log("inside register catch"); res.status(400).json({message : err})}   
    
}

module.exports = {getallUsers,registerUser,loginUser,getUserDetail}
