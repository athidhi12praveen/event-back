const users=require('../MODELS/userSchema')

const jwt=require('jsonwebtoken')

const jwtsecret=process.env.JWTSECRET

// register
exports.registerController=async(req,res)=>{
    const{username,email,password}=req.body
    try{
        const userDetails=await users.findOne({email})
        if(userDetails){
            res.status(406).json("User already exist")
        }
        else{
            const newUser=new users({
                username,email,password
            });
            await newUser.save()
            res.status(200).json(newUser)
        }
    }
    catch(err){
        res.status(401).json(err)
    }
}

// login
exports.loginController=async(req,res)=>{
    const{email,password}=req.body
    try{
        const existingUser=await users.findOne({email,password})
        if(existingUser){
            const token=jwt.sign({userId:existingUser._id},jwtsecret)
            res.status(200).json({existingUser,token})
        }
        else{
            res.status(406).json("Incorrect email or password")
        }
    }
    catch(err){
        res.status(401).json(err)
    }
}

// single user
exports.getauser=async(req,res)=>{
    try{
        const user=await users.find()
        res.status(200).json(user)
    }
    catch(err){
        res.status(401).json(err)
    }
}

// get a user with _id
exports.getuserid=async(req,res)=>{
    const{_id}=req.params
    try{
        const singleuser=await users.findOne({_id})
        res.status(200).json(singleuser)
    }
    catch(err){
        res.status(401).json(err)
    }
}