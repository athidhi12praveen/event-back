const bookings=require('../MODELS/bookingSchema')

// book events
exports.bookEvent=async(req,res)=>{
    const { usermail,name,event,eventid,eventimg,mobile,location,address,date }=req.body
    try{
       const newBook=new bookings({
                usermail,name,event,eventid,eventimg,mobile,location,address,date
            })
            await newBook.save()
            res.status(200).json(newBook)
    }
    catch(err){
        res.status(401).json(err)
    }
}

// get all bookings
exports.getAllbookings= async (req,res)=>{
    try{
        const allbookings=await bookings.find()
        res.status(200).json(allbookings)
    }
    catch(err){
        res.status(401).json(err)
    }
}

// delete bookings
exports.deletebook=async(req,res)=>{
    const{id}=req.params
    try{
        const removebook=await bookings.findByIdAndDelete({_id:id})
        res.status(200).json(removebook)
    }
    catch(err){
        res.status(401).json(err)
    }
}