
const {getData} = require("../services/auth");

const check = (req , res , next) => {

    const token = req.cookies.token ;
    console.log("check tkn " , token );

    if(!token) return res.redirect("/login");
     
    const data = getData(token); 

    console.log("check data" , data) ; 

    if(!data) return res.redirect("/login") ; 

    req.user = data ;
    next() ; 
};

module.exports = check ; 