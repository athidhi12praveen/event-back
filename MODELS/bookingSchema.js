const mongoose=require('mongoose')


const bookingSchema=new mongoose.Schema({

    usermail:{
        type:String,
        required:true,
    },

   name:{
       type:String,
       required:true,
   },

   event:{
    type:String,
    required:true
   },

   eventid:{
    type:Number,
    required:true
   },

   eventimg:{
    type:String,
    required:true
   },

   mobile:{
       type:String,
       required:true,
   },

   location:{
    type:String,
    required:true
    },

    address:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        required:true
    }
})

const bookings=mongoose.model('bookings',bookingSchema)

module.exports=bookings