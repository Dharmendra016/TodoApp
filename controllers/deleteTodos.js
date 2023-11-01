const todoModel = require("../models/todoModel");


exports.deleteController = async (req, res) => {
    try {
        const { _id } = req.params;
        await todoModel.deleteOne({ _id });
        res.json({
            message:"Delete"
        })

    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
}


exports.deleteAllController = async ( req , res) =>{

    try{

        await todoModel.deleteMany();
        res.status(200).json({
            message:"Delete All",
        })
    }catch(err){
        console.log(err) ; 
        res.status(500).json({
            error:err.message,
        })
    }

}