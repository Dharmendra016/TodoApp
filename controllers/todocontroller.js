const todoModel = require("../models/todoModel");


exports.todoController = async (req , res ) => {

    try{
        const {title , description} = req.body; 

        console.log("user data" , req.user);
        const data = await todoModel.create({title , description , createdBy:req.user._id}) ; 

        // res.status(200).json({
        //     sucess:true,
        //     data:data,
        //     message:"Successfully created entries.",
        // })
            res.redirect("/");
    }
    catch(err) {
        console.log(err) ;
        res.status(500).json({
            success:false, 
            data:"no data",
            message:err.message,
        })
    }

} 