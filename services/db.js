const mongoose = require('mongoose');
require('dotenv').config();

async function dbConnection() {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB Connnected....");
    }catch(error){
        console.log(error);
    }
}

module.exports = { dbConnection };