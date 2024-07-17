require('dotenv').config()

require('./DB/connection')

const express=require('express')

const router=require('./ROUTES/router')

const cors=require('cors')

// create server
const bluewingServer=express()

bluewingServer.use(cors())

bluewingServer.use(express.json())

bluewingServer.use(router)

const PORT=3000||process.env.PORT

bluewingServer.listen(PORT,()=>{
    console.log(`BlueWing server running ${PORT}`);
})

