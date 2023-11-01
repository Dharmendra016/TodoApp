const userModel = require("../models/userModel");
const {setData , getData} = require("../services/auth");

exports.signupController  = async (req , res) => {

    try{
        const {name , password} = req.body;

        const data = await userModel.create({name , password});

        res.status(200).json({
            success:true, 
            data:data,
            message:"Successfully created ",
        })
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

exports.loginController = async ( req , res) => {

    try{

        const {name , password} = req.body ; 

        const data = await userModel.findOne({name , password});

        if( !data ) return res.redirect("/login"); 

        const token = setData(data);
        console.log("tkn " , token);

        res.cookie('token' , token) ;

        res.redirect("/");
 
    }
    catch(err){
        console.log(err) ;
        res.status(500).json({
            success:false, 
            data:"no data",
            message:err.message,
        })
    }

}   