const jwt = require("jsonwebtoken");
const secret = "S@qwe11";

function setData( data) {
    return jwt.sign({
        name:data.name,
        _id:data._id,
    }, secret );
}

function getData(token){
    if(!token) return null ;

    try{
        return jwt.verify(token , secret) ; 
    }
    catch(err){
        return null ;
    }
}

module.exports = { 
    getData , 
    setData , 
}