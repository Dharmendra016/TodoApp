const mongoose = require("mongoose")

require("dotenv").config() ;

const dbConnection  = () => { 

    mongoose.connect(process.env.DATABASE_URL  , { 
        
        useNewUrlParser:true, 
        useUnifiedTopology:true, 

    })
    .then(() => console.log("Successfully connected to the Database."))
    .catch((err) => console.log("error occure during connection to the db." , err));

}

module.exports = dbConnection ;