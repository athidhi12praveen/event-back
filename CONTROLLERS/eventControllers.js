const events=require('../MODELS/eventSchema')



// add events
exports.addEvents=async(req,res)=>{
    const{id,title,price,description,image}=req.body
    try{
        const eventDetails=await events.findOne({id})
        if(eventDetails){
            res.status(406).json("Id already exist")
        }
        else{
            const newEvent=new events({
               id,title,price,description,image
            });
            await newEvent.save()
            res.status(200).json(newEvent)
        }
    }
    catch(err){
        res.status(401).json(err)
    }
}

// edit events
exports.editEvent=async(req,res)=>{
    const {_id}=req.params
    const{id,title,price,description,image}=req.body
    try{
        const updateEvent=await events.findByIdAndUpdate({_id:_id},{
            id,title,price,description,image
        },{new:true})
        await updateEvent.save()
        res.status(200).json(updateEvent)
    }
    catch(err){
        res.status(401).json(err)
    }
}

// delete events
exports.deleteEvent=async(req,res)=>{
    const {id}=req.params
    try{
        const removeEvent=await events.findByIdAndDelete({_id:id})
        res.status(200).json(removeEvent)
    }
    catch(err){
        res.status(401).json(err)
    }
}

// get all events
exports.getAllevent= async (req,res)=>{
    try{
        const allevents=await events.find()
        res.status(200).json(allevents)
    }
    catch(err){
        res.status(401).json(err)
    }
}

// get a single event
exports.getaEvent=async(req,res)=>{
    const{id}=req.params
    try{
        const event=await events.findOne({id})
        res.status(200).json(event)
    }
    catch(err){
        res.status(401).json(err)
    }
}




