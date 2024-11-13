const mongoose = require('mongoose')

require('dotenv').config()

mongoose.connect(process.env.mongoDB_URI).then(() => {
        console.log('MongoDB connection successful')
    
}).catch(()=>{
    console.log('Connection Failed')
})