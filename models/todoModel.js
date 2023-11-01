const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({

    title:{
        type:String, 
        require:true,
    },
    description:{
        type:String, 
        require:true,
    },
    createdBy:{
        type:mongoose.Schema.ObjectId,
        ref:"user",
    }

},{timestamps:true});

module.exports = mongoose.model("todo" , todoSchema);