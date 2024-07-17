 const mongoose=require('mongoose')

 const eventSchema=new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },

    title:{
        type:String,
        required:true
    },

    price:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    image:{
        type:String,
        required:true
    }
 })

 const events=mongoose.model('events',eventSchema)

 module.exports=events