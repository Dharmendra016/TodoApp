const express = require("express")
const app = express() ;
const path = require("path");
const cookieParser = require("cookie-parser")
const check = require("./middleware/auth");

require("dotenv").config();
const PORT = process.env.PORT || 4000; 

//dbconnection 
const dbConnect = require("./configs/database");
dbConnect() ;

//parsers 
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

//ejs render
app.set("view engine" , "ejs");
app.set("views" , path.resolve("./views"))


// route mouting 
const useRoute = require("./routes/userRoute");
app.use("/v1" , useRoute );

const todoModel = require("./models/todoModel");

app.get("/"  ,check, async (req , res) => {

    if( !req.user ) return res.redirect('/login');

    const data = await todoModel.find({});

    res.render("home" , {data:data});
})

app.get("/signup" , (req , res )=> {
    res.render("signup");
})

app.get("/login" , (req , res) => {
    res.render("login");
})

app.listen(PORT , () => {
    console.log("Server started at port no :" , PORT) ; 
})