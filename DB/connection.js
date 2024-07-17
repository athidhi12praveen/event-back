const mongoose=require('mongoose')

const connectionString=process.env.DATABASE

mongoose.connect(connectionString).then(()=>{
    console.log("Event Management connected successfully to mongo db atlas");
}).catch((err)=>{
    console.log(`Mongo db connection failed:${err}`);
})

